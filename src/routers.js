import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/HomePage";
import { DashboardPage } from "./pages/DashboardPage";
import { BoardPage } from "./pages/BoardPage";
import { AnalyticsPage } from "./pages/AnalyticsPage";
import { SettingsPage } from "./pages/SettingsPage";

export const ROUTES = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/board", element: <BoardPage /> },
  { path: "/analytics", element: <AnalyticsPage /> },
  { path: "/settings", element: <SettingsPage /> }, 
]);
