import FormInput from "@/components/form/form-input.tsx";
import { useEffect } from "react";
import FormButton from "@/components/form/form-button.tsx";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "@/hooks/auth.ts";

const Login = () => {
  const navigate = useNavigate();

  const { form, loading, onSubmit, authenticated } = useLogin();

  useEffect(() => {
    if (authenticated) navigate("/");
    return () => {};
  }, [authenticated, navigate]);

  const formConfig = {
    email: {
      id: "email",
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      ...form.email,
    },
    password: {
      id: "password",
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Enter your password",
      required: true,
      ...form.password,
    },
  };

  return (
    <div className="container">
      <div className={"row justify-content-center"}>
        <div className="col-12 col-md-6 col-lg-4">
          <h1>Sign In</h1>
          <form
            action={"/auth/login"}
            method="POST"
            className={"d-flex flex-column g-3"}
            onSubmit={onSubmit}
          >
            <FormInput {...formConfig.email} />
            <FormInput {...formConfig.password} />
            <FormButton variant={"primary"} type={"submit"}>
              {loading ? "..." : "Sign In"}
            </FormButton>
            <Link to={"/auth/register"}>Don't have an account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
