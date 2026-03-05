import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { BoardPage } from "./pages/BoardPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { SettingsPage } from "./pages/SettingsPage";
import { ErrorPage } from "./pages/ErrorPage";
export const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      { path: "/dashboard", element: <DashboardPage /> },
      { path: "/board", element: <BoardPage /> },
      { path: "/analytics", element: <AnalyticsPage /> },
      { path: "/settings", element: <SettingsPage /> },
    ],
  },
  { path: "*", element: <ErrorPage /> },
]);
