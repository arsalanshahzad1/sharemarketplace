import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BellIcon } from "@/assets/icons";
import Avatar from "@/components/common/Avatar/Avatar";
import { useI18n } from "@/context/I18nContext";
import { useAuth } from "@/context/AuthContext";
import useOnClickOutside from "@/hooks/useOnClickOutside";
import { LANGUAGES, ROUTES } from "@/constants";
import { cx } from "@/utils/cx";
import {
  marketplaceActions,
  useMarketplaceStore,
} from "@/features/marketplace/marketplaceStore";

export default function Navbar() {
  const { t, tm, lang, setLang } = useI18n();
  const { user } = useAuth();
  const navigate = useNavigate();

  const notifications = useMarketplaceStore((s) => s.notifications);
  const hasUnread = notifications.some((n) => n.unread);

  const [bellOpen, setBellOpen] = useState(false);
  const bellRef = useRef(null);

  const closeBell = () => {
    setBellOpen((open) => {
      if (open) marketplaceActions.markNotificationsRead();
      return false;
    });
  };

  useOnClickOutside(bellRef, closeBell, bellOpen);

  const toggleBell = () => (bellOpen ? closeBell() : setBellOpen(true));

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1240px] items-center justify-between gap-2.5 px-4 sm:gap-4 sm:px-7">
        <div className="flex min-w-0 items-center gap-2.5 sm:gap-3.5">
          <div className="hidden size-[34px] flex-none items-center justify-center rounded-chip bg-brand text-sm font-extrabold tracking-[-0.02em] text-white min-[460px]:flex">
            J3
          </div>
          <div className="min-w-0">
            <div className="truncate text-[12.5px] font-extrabold tracking-[-0.01em] sm:text-sm">
              JAVA TIMES CAFFÈ · JAVA 300
            </div>
            <div className="truncate text-[10.5px] font-bold uppercase tracking-[0.04em] text-muted sm:text-[11.5px]">
              <span
                role="link"
                tabIndex={0}
                className="cursor-pointer hover:text-body"
                onClick={() => navigate(ROUTES.HOME)}
                onKeyDown={(e) => e.key === "Enter" && navigate(ROUTES.HOME)}
              >
                {t("fundraiser")}
              </span>{" "}
              / <span className="text-brand">{t("marketplace")}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-none items-center gap-2.5 sm:gap-3.5">
          <div
            role="group"
            aria-label="Language"
            className="flex rounded-full border border-line bg-canvas p-[3px]"
          >
            {LANGUAGES.map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                aria-pressed={lang === code}
                className={cx(
                  "cursor-pointer rounded-full border-none px-2.5 py-[5px] text-xs font-extrabold sm:px-[13px]",
                  lang === code
                    ? "bg-ink-900 text-white"
                    : "bg-transparent text-body",
                )}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="relative" ref={bellRef}>
            <button
              type="button"
              onClick={toggleBell}
              aria-label={t("notifications")}
              aria-expanded={bellOpen}
              className="relative flex size-9 cursor-pointer items-center justify-center rounded-control border border-line bg-surface text-body hover:border-brand-border hover:bg-brand-soft"
            >
              <BellIcon size={17} />
              {hasUnread && (
                <span className="absolute right-2 top-[7px] size-2 rounded-full border-2 border-white bg-brand" />
              )}
            </button>

            {bellOpen && (
              <div className="absolute right-0 top-11 w-[min(330px,calc(100vw-32px))] animate-pop rounded-card border border-line bg-surface p-2 shadow-pop">
                <div className="px-3 pb-1.5 pt-2.5 text-[11.5px] font-extrabold uppercase tracking-[0.05em] text-muted">
                  {t("notifications")}
                </div>

                {notifications.length === 0 && (
                  <div className="px-3 pb-[18px] pt-3.5 text-[13px] font-semibold text-muted">
                    —
                  </div>
                )}

                {notifications.slice(0, 5).map((notification) => (
                  <div
                    key={notification.id}
                    className="flex items-start gap-2.5 rounded-control px-3 py-2.5 hover:bg-canvas"
                  >
                    <span
                      className={cx(
                        "mt-1.5 size-[7px] flex-none rounded-full",
                        notification.unread ? "bg-brand" : "bg-line-strong",
                      )}
                    />
                    <div>
                      <div className="text-[13px] font-semibold leading-[1.4]">
                        {tm(notification.message)}
                      </div>
                      <div className="mt-0.5 text-[11.5px] font-semibold text-muted">
                        {tm(notification.time)}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to={ROUTES.DASHBOARD} aria-label={t("dashboard")}>
            <Avatar self initials={user?.initials ?? "DC"} name={user?.name} />
          </Link>
        </div>
      </div>
    </header>
  );
}
