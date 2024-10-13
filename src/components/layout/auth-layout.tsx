import { Outlet } from "react-router-dom";
import AppFooter from "@/components/common/app-footer.tsx";
import AppNav from "@/components/common/app-nav.tsx";

export const AuthLayout = () => {
  return (
    <div className="layout-h">
      <AppNav />
      <div className="layout-v">
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </div>
  );
};
