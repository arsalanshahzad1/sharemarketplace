import { useEffect } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import Card, { SectionLabel } from "@/components/common/Card/Card";
import { Page } from "@/components/layout/PageWrapper/PageWrapper";
import { ROUTES } from "@/constants";
import { ENV } from "@/constants/env";
import { useAuth } from "@/context/AuthContext";
import { getAuthToken } from "@/services/api";

export default function Login() {
  const { isAuthenticated, status } = useAuth();
  const location = useLocation();
  const hasStoredToken = Boolean(getAuthToken());
  const isRestoring = status === "loading" || (status === "idle" && hasStoredToken);

  useEffect(() => {
    if (!isAuthenticated && !isRestoring) {
      window.location.assign(ENV.INVESTIN_LOGIN_URL);
    }
  }, [isAuthenticated, isRestoring]);

  if (isAuthenticated) {
    return <Navigate to={location.state?.from?.pathname || ROUTES.HOME} replace />;
  }

  return (
    <Page width="narrow" className="pt-10">
      <Card padding="roomy">
        <SectionLabel>Investor Login</SectionLabel>
        <div className="mt-5 space-y-4">
          <p className="text-sm font-bold text-muted">
            {isRestoring
              ? "Loading session..."
              : "Please sign in through Investin to access the marketplace."}
          </p>
          {!isRestoring ? (
            <Button
              type="button"
              block
              size="lg"
              onClick={() => window.location.assign(ENV.INVESTIN_LOGIN_URL)}
            >
              Go to Investin login
            </Button>
          ) : null}
        </div>
      </Card>
    </Page>
  );
}
