import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/features/home/page/Home.page";
import TeamsPage from "@/features/teams/page/Teams.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
]);
