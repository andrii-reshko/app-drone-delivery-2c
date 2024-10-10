import { Outlet } from "react-router-dom";
import AppNav from "@/components/common/app-nav.tsx";

export const AuthLayout = () => {
  return (
    <div className="layout-h">
      <AppNav />
      <div className="layout-v">
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};
