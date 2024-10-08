import { NavLink, Outlet } from "react-router-dom";

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
        </ul>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};
