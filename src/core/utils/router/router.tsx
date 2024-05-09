import { createBrowserRouter } from "react-router-dom";
import HomePage from "@/features/home/page/Home.page";
import TeamsPage from "@/features/teams/page/Teams.page";
import MagicMirrorPage from "@/features/products/magic_mirror/page/MagicMirror.product.page";
import TrichoTrackPage from "@/features/products/tricho_track/page/Trichotrack.product.page";
import DownloadPage from "@/features/download/page/Download.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/teams",
    element: <TeamsPage />,
  },
  {
    path: "/products/magic-mirror",
    element: <MagicMirrorPage />,
  },
  {
    path: "/products/trichotrack",
    element: <TrichoTrackPage />,
  },
  {
    path: "/download",
    element: <DownloadPage />,
  },
]);
