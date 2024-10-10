import { Outlet } from "react-router-dom";
import AppFooter from "@/components/common/app-footer.tsx";

export const GuestLayout = () => {
  return (
    <>
      <div className="layout-h">
        <div className="layout-v">
          <main className={"align-items-center justify-content-center"}>
            <Outlet />
          </main>
          <AppFooter />
        </div>
      </div>
    </>
  );
};
