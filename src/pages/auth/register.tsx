import { Link, useNavigate } from "react-router-dom";
import FormInput from "@/components/form/form-input.tsx";
import FormButton from "@/components/form/form-button.tsx";
import { useEffect } from "react";
import { useRegister } from "@/hooks/auth.ts";
import { usePageMeta } from "@/hooks/seo.ts";

const Register = () => {
  usePageMeta({ title: "Sign Up" });

  const navigate = useNavigate();

  const { form, onSubmit, loading, authenticated } = useRegister();

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
    name: {
      id: "name",
      name: "name",
      type: "text",
      label: "Full name",
      placeholder: "Enter your first and last name",
      ...form.name,
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
    passwordConfirmation: {
      id: "password_confirmation",
      name: "password_confirmation",
      type: "password",
      label: "Confirm Password",
      placeholder: "Confirm your password",
      required: true,
      ...form.passwordConfirmation,
    },
  };

  return (
    <div className="container">
      <div className={"row justify-content-center"}>
        <div className="col-12 col-md-6 col-lg-4">
          <h1>Sign Up</h1>
          <form
            action={"/auth/register"}
            method="POST"
            className={"d-flex flex-column g-3"}
            onSubmit={onSubmit}
          >
            <FormInput {...formConfig.email} />
            <FormInput {...formConfig.name} />
            <FormInput {...formConfig.password} />
            <FormInput {...formConfig.passwordConfirmation} />
            <FormButton variant={"primary"} type={"submit"}>
              {loading ? "..." : "Sign Up"}
            </FormButton>
            <Link to={"/auth/login"}>Already have an account?</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
