import { createBrowserRouter } from "react-router";

export const ROUTES = createBrowserRouter([
  { path: "/", element: <HomePage/>},
  { path: "/dashboard", element: <DashboardPage /> },
  { path: "/board", element: <BoardPage /> },
  { path: "/analytics", element: <Analyticspage /> },
  { path: "/settings", element: <SettingPage /> },
]);
