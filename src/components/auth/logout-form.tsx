import { useAuth, useLogout } from "@/hooks/auth.ts";
import { IconLogout } from "@/components/icons";

const LogoutForm = () => {
  const { authenticated } = useAuth();
  const { onSubmit } = useLogout();

  return (
    authenticated && (
      <form
        className={"mt-auto nav-form"}
        action="/auth/logout"
        method="POST"
        onSubmit={onSubmit}
      >
        <button type={"submit"} className={"nav-item"}>
          <div className={"nav-icon"}>
            <IconLogout />
          </div>
          <div className={"nav-title"}>Logout</div>
        </button>
      </form>
    )
  );
};

export default LogoutForm;
