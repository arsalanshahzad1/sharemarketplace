import { authEndpoints } from "@/services/endpoints/auth";
import { setAuthToken } from "@/services/api";

export const authApi = {
  async login(credentials) {
    const { user, token } = await authEndpoints.login(credentials);
    setAuthToken(token);
    return { user, token };
  },

  async logout() {
    try {
      await authEndpoints.logout();
    } finally {
      setAuthToken(null);
    }
  },

  async sessionHandoff(code) {
    const { user, token } = await authEndpoints.sessionHandoff(code);
    setAuthToken(token);
    return { user, token };
  },

  me: () => authEndpoints.me(),
};

export default authApi;
