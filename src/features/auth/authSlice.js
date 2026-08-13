import { createStore, createStoreHook } from "@/store/store";
import authApi from "./authApi";
import { getAuthToken } from "@/services/api";

const initialState = {
  user: null,
  status: "idle",
  error: null,
};

export const authStore = createStore(initialState);
export const useAuthStore = createStoreHook(authStore);

const { setState, getState } = authStore;

export const authActions = {
  async login(credentials) {
    setState({ status: "loading", error: null });
    try {
      const { user } = await authApi.login(credentials);
      setState({ user, status: "authenticated" });
      return user;
    } catch (error) {
      setState({ status: "error", error: error.message });
      throw error;
    }
  },

  async logout() {
    await authApi.logout();
    authStore.reset();
  },

  async sessionHandoff(code) {
    setState({ status: "loading", error: null });
    try {
      const { user } = await authApi.sessionHandoff(code);
      setState({ user, status: "authenticated" });
      return user;
    } catch (error) {
      setState({ user: null, status: "error", error: error.message });
      throw error;
    }
  },

  async restoreSession() {
    if (getState().status !== "idle") return;
    if (!getAuthToken()) {
      setState({ user: null, status: "idle" });
      return;
    }
    setState({ status: "loading" });
    try {
      const user = await authApi.me();
      setState({ user, status: user ? "authenticated" : "idle" });
    } catch {
      setState({ user: null, status: "idle" });
    }
  },
};

export default authStore;
