import "@mantine/core/styles.css";
import "@mantine/core/styles/baseline.css";
import "@mantine/core/styles/default-css-variables.css";
import "@mantine/core/styles/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { ROUTES } from "./routers.jsx";

const queryClient = new QueryClient()

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={ROUTES} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
