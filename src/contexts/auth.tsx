import { createContext, ReactNode, useState } from "react";
import { TokenResponse } from "@/api/types.ts";

const AUTH_KEY = "auth";

const authStorage = {
  has(key: string): boolean {
    const obj = JSON.parse(localStorage.getItem(AUTH_KEY) || "{}");
    return obj[key] !== undefined;
  },
  get(key: string): string | undefined {
    const obj = JSON.parse(localStorage.getItem(AUTH_KEY) || "{}");
    return obj[key];
  },
  set(key: string, value: string): void {
    const obj = JSON.parse(localStorage.getItem(AUTH_KEY) || "{}");
    obj[key] = value;
    localStorage.setItem(AUTH_KEY, JSON.stringify(obj));
  },
  fill(data: TokenResponse): void {
    localStorage.setItem(AUTH_KEY, JSON.stringify(data));
  },
  clear(): void {
    localStorage.removeItem(AUTH_KEY);
  },
};

type AuthContextProps = {
  authenticated: boolean;
  accessToken: string | undefined;
  refreshToken: string | undefined;
  expiresAt: string | undefined;
  authenticate: (data: TokenResponse) => void;
  reset: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  authenticated: authStorage.has("access_token"),
  accessToken: authStorage.get("access_token"),
  refreshToken: authStorage.get("refresh_token"),
  expiresAt: authStorage.get("expires_at"),
  authenticate: () => undefined,
  reset: () => undefined,
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [accessToken, setAccessToken] = useState<string | undefined>(
    authStorage.get("access_token"),
  );
  const [refreshToken, setRefreshToken] = useState<string | undefined>(
    authStorage.get("refresh_token"),
  );
  const [expiresAt, setExpiresAt] = useState<string | undefined>(
    authStorage.get("expires_at"),
  );
  const [authenticated, setAuthenticated] = useState<boolean>(
    authStorage.has("access_token"),
  );

  const authenticate = (data: TokenResponse) => {
    authStorage.fill(data);
    setAccessToken(data.access_token);
    setRefreshToken(data.refresh_token);
    setExpiresAt(data.expires_at);
    setAuthenticated(true);
  };

  const reset = () => {
    authStorage.clear();
    setAccessToken(undefined);
    setRefreshToken(undefined);
    setExpiresAt(undefined);
    setAuthenticated(false);
  };

  const context = {
    authenticated,
    accessToken,
    refreshToken,
    expiresAt,
    authenticate,
    reset,
  };

  return (
    <AuthContext.Provider value={context}>{children}</AuthContext.Provider>
  );
};
