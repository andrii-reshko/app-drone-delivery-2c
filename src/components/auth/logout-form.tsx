import { useAuth, useLogout } from "@/hooks/auth.ts";

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
          Log out
        </button>
      </form>
    )
  );
};

export default LogoutForm;
