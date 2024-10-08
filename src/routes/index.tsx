import Error from "@/pages/error.tsx";
import Home from "@/pages/home.tsx";
import { RouteObject } from "react-router-dom";
import ContactIndex from "@/pages/contact-index.tsx";
import SendIndex from "@/pages/send-index.tsx";
import ReceiveIndex from "@/pages/receive-index.tsx";
import { AuthLayout } from "@/components/layout/auth-layout.tsx";

const index: RouteObject[] = [
  {
    path: "/auth",
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Error />,
      },
      {
        path: "login",
        element: <Error />,
      },
      {
        path: "register",
        element: <Error />,
      },
    ],
  },
  {
    path: "/",
    errorElement: <Error />,
    element: <AuthLayout />,
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
