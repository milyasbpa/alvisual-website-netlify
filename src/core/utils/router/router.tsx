import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/features/home/page/Home.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/about-us",
    element: <h1 className="text-lime-600" >hallo</h1>,
  },
]);
