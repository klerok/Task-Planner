import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MantineProvider } from "@mantine/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router";
import { ROUTES } from "./routers.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MantineProvider>
      <QueryClientProvider>
        <RouterProvider router={ROUTES} />
      </QueryClientProvider>
    </MantineProvider>
  </StrictMode>
);
