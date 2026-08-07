import { createContext, useContext, useEffect, useMemo } from "react";
import { authActions, useAuthStore } from "@/features/auth/authSlice";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const auth = useAuthStore();

  useEffect(() => {
    authActions.restoreSession();
  }, []);

  const value = useMemo(
    () => ({
      ...auth,
      isAuthenticated: Boolean(auth.user),
      login: authActions.login,
      logout: authActions.logout,
    }),
    [auth],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}

export default AuthContext;
