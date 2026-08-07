import { useNavigate } from "react-router-dom";
import { ArrowLeftIcon } from "@/assets/icons";
import Button from "@/components/common/Button/Button";

export default function PageHeader({
  title,
  backTo,
  badge,
  actions,
  backLabel = "Back",
}) {
  const navigate = useNavigate();

  return (
    <div className="mb-[18px] flex flex-wrap items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-3.5">
        {backTo && (
          <Button
            variant="icon"
            onClick={() => navigate(backTo)}
            aria-label={backLabel}
          >
            <ArrowLeftIcon />
          </Button>
        )}
        <h1 className="m-0 text-[19px] font-extrabold tracking-[-0.02em] sm:text-[22px]">
          {title}
        </h1>
        {badge}
      </div>
      {actions && (
        <div className="flex flex-none items-center gap-2.5">{actions}</div>
      )}
    </div>
  );
}
