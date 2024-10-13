import Error from "@/pages/error.tsx";
import Home from "@/pages/home.tsx";
import { RouteObject } from "react-router-dom";
import ContactIndex from "@/pages/contact-index.tsx";
import SendIndex from "@/pages/send-index.tsx";
import ReceiveIndex from "@/pages/receive-index.tsx";
import { AuthRoute, GuestRoute } from "@/routes/components.tsx";
import Login from "@/pages/auth/login.tsx";
import Register from "@/pages/auth/register.tsx";

const index: RouteObject[] = [
  {
    path: "/auth",
    errorElement: <Error />,
    element: <GuestRoute />,
    children: [
      {
        path: "",
        element: <Login />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <Error />,
    element: <AuthRoute />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "contact",
        element: <ContactIndex />,
      },
      {
        path: "send",
        element: <SendIndex />,
      },
      {
        path: "receive",
        element: <ReceiveIndex />,
      },
    ],
  },
];

export default index;
