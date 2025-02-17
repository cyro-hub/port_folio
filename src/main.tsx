import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { LoadingProvider } from "./contextApi/LoadingContext.tsx";
import Toast from "./pages/components/Toaster.tsx";

createRoot(document.getElementById("root")!).render(
  <LoadingProvider>
    <App />
    <Toast />
  </LoadingProvider>
);
