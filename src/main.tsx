import React from "react";
import ReactDOM from "react-dom/client";

import "./core/ui/styles/globals.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./core/utils/router";
import { HelmetProvider } from "react-helmet-async";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </React.StrictMode>
);
