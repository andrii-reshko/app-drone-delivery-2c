import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

export interface NavItemProps {
  to: string;
  title: string;
  icon?: ReactNode;
}

const NavItem = ({ to, title, icon }: NavItemProps) => {
  return (
    <NavLink to={to} className={"nav-item"}>
      <div className={"nav-icon"}>{icon}</div>
      <div className={"nav-title"}>{title}</div>
    </NavLink>
  );
};

export default NavItem;
