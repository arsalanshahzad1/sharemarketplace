import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import Card, { SectionLabel } from "@/components/common/Card/Card";
import { Page } from "@/components/layout/PageWrapper/PageWrapper";
import { ROUTES } from "@/constants";
import { ENV } from "@/constants/env";
import { useAuth } from "@/context/AuthContext";
import { useI18n } from "@/context/I18nContext";

const handoffRequests = new Map();

export default function AuthContinue() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { sessionHandoff } = useAuth();
  const { setLang } = useI18n();
  const [error, setError] = useState("");

  useEffect(() => {
    const code = searchParams.get("code");
    const lang = searchParams.get("lang");

    if (lang === "en" || lang === "es") {
      setLang(lang);
    }

    if (!code) {
      setError("Marketplace session link is missing. Please open marketplace from your Investin account.");
      return;
    }

    const request =
      handoffRequests.get(code) ||
      sessionHandoff(code).finally(() => {
        handoffRequests.delete(code);
      });

    handoffRequests.set(code, request);

    request
      .then(() => {
        navigate(ROUTES.HOME, { replace: true });
      })
      .catch((err) => {
        setError(
          err.message ||
            "Marketplace session link expired. Please open marketplace from your Investin account.",
        );
        window.history.replaceState(null, "", ROUTES.AUTH_CONTINUE);
      });
  }, [navigate, searchParams, sessionHandoff, setLang]);

  return (
    <Page width="narrow" className="pt-10">
      <Card padding="roomy">
        <SectionLabel>Marketplace access</SectionLabel>
        <div className="mt-5 space-y-4">
          {error ? (
            <>
              <p className="text-sm font-semibold text-danger">{error}</p>
              <Button
                type="button"
                block
                size="lg"
                onClick={() => window.location.assign(ENV.INVESTIN_LOGIN_URL)}
              >
                Go to Investin login
              </Button>
            </>
          ) : (
            <p className="text-sm font-bold text-muted">Opening marketplace...</p>
          )}
        </div>
      </Card>
    </Page>
  );
}
