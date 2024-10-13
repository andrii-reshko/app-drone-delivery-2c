import AppNavItem, { NavItemProps } from "@/components/common/nav-item.tsx";
import { IconAccount, IconInbox, IconOutbox } from "@/components/icons";

const menu: NavItemProps[] = [
  { to: "/send", title: "Send", icon: <IconOutbox /> },
  { to: "/receive", title: "Receive", icon: <IconInbox /> },
  { to: "/contact", title: "Contacts", icon: <IconAccount /> },
];

const MainNav = () => {
  return (
    <aside>
      <nav>
        {menu.map((itemProps, i) => (
          <AppNavItem key={i} {...itemProps} />
        ))}
      </nav>
      {/*<LogoutForm/>*/}
    </aside>
  );
};

export default MainNav;
