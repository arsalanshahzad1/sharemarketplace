import { useState } from "react";
import Avatar from "@/components/common/Avatar/Avatar";
import Badge from "@/components/common/Badge/Badge";
import Button from "@/components/common/Button/Button";
import Card from "@/components/common/Card/Card";
import Input from "@/components/common/Input/Input";
import { useI18n } from "@/context/I18nContext";
import { THREAD_ROLE, avatarColors } from "@/constants";
import { formatCurrency, formatLineTotal } from "@/utils/formatCurrency";
import { cx } from "@/utils/cx";
import {
  EVENT_LABEL_KEYS,
  THREAD_STATUS_META,
  isActionable,
  isPayable,
  threadPrice,
} from "../../marketplaceSelectors";

const COUNTER_STEP = 25;

const ACTIONS = "flex flex-wrap gap-2.5 border-t border-canvas pt-4";

export default function OfferThread({
  thread,
  onAccept,
  onReject,
  onCounter,
  onPay,
}) {
  const { t, tm } = useI18n();
  const [countering, setCountering] = useState(false);

  const price = threadPrice(thread);
  const isSeller = thread.role === THREAD_ROLE.SELLER;
  const [counterPrice, setCounterPrice] = useState(
    price + (isSeller ? COUNTER_STEP : -COUNTER_STEP),
  );
  const status = THREAD_STATUS_META[thread.status];
  const palette = avatarColors(thread.av);

  const openCounter = () => {
    setCounterPrice(price + (isSeller ? COUNTER_STEP : -COUNTER_STEP));
    setCountering(true);
  };

  const submitCounter = () => {
    onCounter(counterPrice);
    setCountering(false);
  };

  return (
    <Card>
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <Avatar
            initials={thread.initials}
            paletteIndex={thread.av}
            size="lg"
            name={thread.counterparty}
          />
          <div>
            <div className="text-[14.5px] font-extrabold leading-[1.35]">
              {t(isSeller ? "threadTitleSeller" : "threadTitleBuyer", {
                name: thread.counterparty,
              })}
            </div>
            <div className="mt-0.5 text-xs font-semibold leading-[1.4] text-muted">
              {t("threadSubtitle", { id: thread.listingId, qty: thread.qty })}
            </div>
          </div>
        </div>

        <Badge tone={status.tone} uppercase>
          {t(status.labelKey)}
        </Badge>
      </div>

      <div className="mt-[18px] flex flex-col">
        {thread.events.map((event, index) => {
          const settled = event.type === "accept" || event.type === "paid";
          const mine = event.by === "me";
          const who = mine ? t("you") : thread.counterparty.split(" ")[0];

          return (
            <div key={`${event.type}-${index}`} className="flex gap-3.5">
              <div className="flex w-[26px] flex-none flex-col items-center">
                <span
                  className={cx(
                    "z-10 flex size-[26px] items-center justify-center rounded-full text-[11px] font-extrabold",
                    settled && "bg-success text-white",
                    !settled && mine && "bg-ink-900 text-white",
                  )}
                  style={
                    settled || mine
                      ? undefined
                      : { background: palette.bg, color: palette.fg }
                  }
                >
                  {settled ? "✓" : mine ? t("youInitial") : thread.initials[0]}
                </span>

                {index < thread.events.length - 1 && (
                  <span className="w-0.5 flex-1 bg-line min-h-3.5" />
                )}
              </div>

              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-baseline gap-2.5">
                  <span className="text-[13.5px] font-extrabold">
                    {who} {t(EVENT_LABEL_KEYS[event.type])}
                  </span>
                  {event.price && (
                    <span className="font-mono text-sm font-bold tabular-nums text-brand">
                      {formatCurrency(event.price)} {t("perShare")}
                    </span>
                  )}
                  <span className="text-[11.5px] font-bold text-muted">
                    {tm(event.time)}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {isActionable(thread) &&
        (countering ? (
          <div className={cx(ACTIONS, "items-center")}>
            <Input
              className="min-w-[160px] flex-1"
              size="sm"
              type="number"
              prefix="MX$"
              value={counterPrice}
              onChange={(e) => setCounterPrice(e.target.value)}
              aria-label={t("offerPrice")}
            />
            <Button onClick={submitCounter}>{t("sendCounter")}</Button>
            <Button variant="neutral" onClick={() => setCountering(false)}>
              {t("cancel")}
            </Button>
          </div>
        ) : (
          <div className={ACTIONS}>
            <Button variant="success" onClick={onAccept}>
              {t("accept")} {formatCurrency(price * thread.qty)}
            </Button>
            <Button variant="secondary" onClick={openCounter}>
              {t("counter")}
            </Button>
            <Button variant="neutral" onClick={onReject}>
              {t("reject")}
            </Button>
          </div>
        ))}

      {isPayable(thread) && (
        <div className={cx(ACTIONS, "items-center justify-between")}>
          <div className="text-[12.5px] font-bold text-body">
            {t("dealAgreed")}{" "}
            <span className="font-mono tabular-nums text-ink">
              {formatLineTotal(price, thread.qty)}
            </span>
          </div>
          <Button onClick={onPay}>{t("proceedPay")}</Button>
        </div>
      )}
    </Card>
  );
}

export function EmptyThreads({ children }) {
  return (
    <Card dashed padding="none">
      <div className="p-12 text-center text-[13.5px] font-bold text-muted">
        {children}
      </div>
    </Card>
  );
}
