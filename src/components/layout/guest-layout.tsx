import { Outlet } from "react-router-dom";

export const GuestLayout = () => {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
};
