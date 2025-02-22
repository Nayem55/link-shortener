import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async"; // Import HelmetProvider
import { RouterProvider } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import router from "./Routes/Routes.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider> {/* Wrap entire app */}
      <RouterProvider router={router} />
      <Toaster />
    </HelmetProvider>
  </StrictMode>
);
