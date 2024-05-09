import { createBrowserRouter } from "react-router-dom";
import App from "@/App";
import AboutUs from "@/AboutUs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about-us",
    element: <AboutUs />,
  },
]);
