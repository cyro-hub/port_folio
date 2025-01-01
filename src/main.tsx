import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoadingProvider } from "./contextApi/LoadingContext.tsx";
import { Toaster } from "@/components/ui/sonner";

createRoot(document.getElementById("root")!).render(
  <LoadingProvider>
    <App />
    <Toaster />
  </LoadingProvider>
);
