import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import App from "./App";

const renderElement = document.getElementById("app");
const root = createRoot(renderElement);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
