import { NavLink, Outlet } from "react-router-dom";
import LogoutForm from "@/components/auth/logout-form.tsx";

export const AuthLayout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink to={"/send"}>Send</NavLink>
          </li>
          <li>
            <NavLink to={"/receive"}>Receive</NavLink>
          </li>
          <li>
            <NavLink to={"/contact"}>Contacts</NavLink>
          </li>
          <li>
            <LogoutForm />
          </li>
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
