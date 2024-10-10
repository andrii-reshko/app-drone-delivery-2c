import Error from "@/pages/error.tsx";
import Home from "@/pages/home.tsx";
import { RouteObject } from "react-router-dom";
import ContactIndex from "@/pages/contact/contact-index.tsx";
import SendIndex from "@/pages/send/send-index.tsx";
import ReceiveIndex from "@/pages/receive/receive-index.tsx";
import { AuthRoute, GuestRoute } from "@/routes/components.tsx";
import Login from "@/pages/auth/login.tsx";
import Register from "@/pages/auth/register.tsx";
import SendOrderView from "@/pages/send/send-order-view.tsx";
import ReceiveOrderView from "@/pages/receive/receive-order-view.tsx";
import ContactEdit from "@/pages/contact/contact-edit.tsx";

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
      // Contact
      {
        path: "contact",
        element: <ContactIndex />,
        children: [
          {
            path: ":uuid",
            element: <ContactEdit />,
          },
        ],
      },
      // Send
      {
        path: "send",
        element: <SendIndex />,
      },
      {
        path: "send/:uuid",
        element: <SendOrderView />,
      },
      // Receive
      {
        path: "receive",
        element: <ReceiveIndex />,
      },
      {
        path: "receive/:uuid",
        element: <ReceiveOrderView />,
      },
    ],
  },
];

export default index;
