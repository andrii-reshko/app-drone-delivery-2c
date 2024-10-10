import { Navigate } from "react-router-dom";
import { GuestLayout } from "@/components/layout/guest-layout.tsx";
import { AuthLayout } from "@/components/layout/auth-layout.tsx";
import { useAuth } from "@/hooks/auth.ts";

export const GuestRoute = () => {
  const { authenticated } = useAuth();
  return authenticated ? <Navigate to="/" replace={true} /> : <GuestLayout />;
};

export const AuthRoute = () => {
  const { authenticated } = useAuth();
  return authenticated ? (
    <AuthLayout />
  ) : (
    <Navigate to="/auth/login" replace={true} />
  );
};
