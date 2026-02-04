import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import HomePage from "./pages/HomePage";
import CenterLayout from "./layouts/CenterLayout";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [{ path: "/", handle: { title: "Home" }, element: <HomePage /> }],
  },

  {
    element: <CenterLayout />,
    children: [
      { path: "*", handle: { title: "NotFound" }, element: <NotFound /> },
    ],
  },
]);
