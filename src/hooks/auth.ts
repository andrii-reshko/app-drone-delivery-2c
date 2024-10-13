import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useContext,
  useState,
} from "react";
import api from "@/api/api.ts";
import { AuthContext } from "@/contexts/auth.tsx";

export const stateToProps = <T>([get, set]: [
  T,
  Dispatch<SetStateAction<T>>,
]) => ({
  value: get,
  onInput: (value: T) => set(value),
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate, reset, authenticated } = useAuth();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { data } = await api.auth.login({
        email,
        password,
      });
      setLoading(false);
      authenticate(data);
    } catch (e: unknown) {
      setLoading(false);
      reset();
      throw e;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return handleLogin();
  };

  return {
    form: {
      email: stateToProps([email, setEmail]),
      password: stateToProps([password, setPassword]),
    },
    onSubmit,
    loading,
    authenticated,
  };
};

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const { authenticate, reset, authenticated } = useAuth();

  const handleRegisterAndLogin = async () => {
    try {
      setLoading(true);
      await api.auth.register({
        name,
        email,
        password,
        password_confirmation: passwordConfirmation,
      });
      const { data } = await api.auth.login({
        email,
        password,
      });
      setLoading(false);
      authenticate(data);
    } catch (e: unknown) {
      setLoading(false);
      reset();
      throw e;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return handleRegisterAndLogin();
  };

  return {
    form: {
      email: stateToProps([email, setEmail]),
      name: stateToProps([name, setName]),
      password: stateToProps([password, setPassword]),
      passwordConfirmation: stateToProps([
        passwordConfirmation,
        setPasswordConfirmation,
      ]),
    },
    onSubmit,
    loading,
    authenticated,
  };
};

export const useLogout = () => {
  const [loading, setLoading] = useState(false);
  const [isLoggedOut, setIsLoggedOut] = useState(false);

  const { reset } = useAuth();

  const handleLogout = async () => {
    try {
      setLoading(true);
      await api.auth.logout();
      setLoading(false);
      setIsLoggedOut(true);
      reset();
    } catch (e: unknown) {
      setLoading(false);
      throw e;
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    return handleLogout();
  };

  return {
    onSubmit,
    loading,
    isLoggedOut,
  };
};
