import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "@/routes";

import "@/styles/app.scss";

const root = document.getElementById("root");

const router = createBrowserRouter(routes, {
  basename: "/",
  window,
});

createRoot(root!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
