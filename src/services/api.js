import { ENV } from "@/constants/env";

export class ApiError extends Error {
  constructor(message, { status, code, details } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status ?? 0;
    this.code = code ?? "unknown_error";
    this.details = details ?? null;
  }
}

let authToken = ENV.AUTH_TOKEN || window.localStorage.getItem("jtc_marketplace_token");

export const setAuthToken = (token) => {
  authToken = token || null;
  if (authToken) {
    window.localStorage.setItem("jtc_marketplace_token", authToken);
  } else {
    window.localStorage.removeItem("jtc_marketplace_token");
  }
};

export const getAuthToken = () => authToken;

const buildUrl = (path, params) => {
  const url = new URL(
    path.replace(/^\//, ""),
    ENV.API_BASE_URL.endsWith("/") ? ENV.API_BASE_URL : `${ENV.API_BASE_URL}/`,
  );
  Object.entries(params ?? {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      url.searchParams.set(key, String(value));
    }
  });
  return url.toString();
};

async function request(
  path,
  { method = "GET", body, params, signal, headers } = {},
) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), ENV.API_TIMEOUT);
  signal?.addEventListener("abort", () => controller.abort(), { once: true });

  try {
    const response = await fetch(buildUrl(path, params), {
      method,
      signal: controller.signal,
      headers: {
        Accept: "application/json",
        ...(body ? { "Content-Type": "application/json" } : null),
        ...(authToken ? { Authorization: `Bearer ${authToken}` } : null),
        ...(authToken ? { "x-auth-token": authToken } : null),
        ...headers,
      },
      ...(body ? { body: JSON.stringify(body) } : null),
    });

    const isJson = response.headers
      .get("content-type")
      ?.includes("application/json");
    const payload = isJson ? await response.json() : await response.text();

    if (!response.ok) {
      throw new ApiError(payload?.message ?? response.statusText, {
        status: response.status,
        code: payload?.code,
        details: payload?.details,
      });
    }

    return payload;
  } catch (error) {
    if (error instanceof ApiError) throw error;
    if (error.name === "AbortError") {
      throw new ApiError("Request timed out", { code: "timeout" });
    }
    throw new ApiError(error.message, { code: "network_error" });
  } finally {
    clearTimeout(timeout);
  }
}

export const api = {
  get: (path, options) => request(path, { ...options, method: "GET" }),
  post: (path, body, options) =>
    request(path, { ...options, method: "POST", body }),
  put: (path, body, options) =>
    request(path, { ...options, method: "PUT", body }),
  patch: (path, body, options) =>
    request(path, { ...options, method: "PATCH", body }),
  delete: (path, options) => request(path, { ...options, method: "DELETE" }),
};

export const mockResponse = (data, delay = 220) =>
  new Promise((resolve) => setTimeout(() => resolve(data), delay));

export default api;
