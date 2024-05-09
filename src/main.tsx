import React from "react";
import ReactDOM from "react-dom/client";

import "./core/ui/styles/globals.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./core/utils/router";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
