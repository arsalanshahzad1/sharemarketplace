import { useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Button from "@/components/common/Button/Button";
import Card, { SectionLabel } from "@/components/common/Card/Card";
import Input from "@/components/common/Input/Input";
import { Page } from "@/components/layout/PageWrapper/PageWrapper";
import { useAuth } from "@/context/AuthContext";
import { ROUTES } from "@/constants";

export default function Login() {
  const { isAuthenticated, login, status, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [localError, setLocalError] = useState(null);

  if (isAuthenticated) {
    return <Navigate to={location.state?.from?.pathname || ROUTES.HOME} replace />;
  }

  const submit = async (event) => {
    event.preventDefault();
    setLocalError(null);

    try {
      await login(form);
      navigate(location.state?.from?.pathname || ROUTES.HOME, { replace: true });
    } catch (err) {
      setLocalError(err.message);
    }
  };

  return (
    <Page width="narrow" className="pt-10">
      <Card padding="roomy">
        <SectionLabel>Investor Login</SectionLabel>
        <form className="mt-5 [&>*+*]:mt-4" onSubmit={submit}>
          <Input
            label="Email"
            type="email"
            autoComplete="email"
            value={form.email}
            onChange={(event) =>
              setForm((current) => ({ ...current, email: event.target.value }))
            }
          />
          <Input
            label="Password"
            type="password"
            autoComplete="current-password"
            value={form.password}
            onChange={(event) =>
              setForm((current) => ({ ...current, password: event.target.value }))
            }
            error={localError || error}
          />
          <Button block size="lg" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Signing in..." : "Sign in"}
          </Button>
        </form>
      </Card>
    </Page>
  );
}

