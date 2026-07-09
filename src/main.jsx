import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ProductStoreContext from "./context/ProductStoreContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProductStoreContext>
        <App />
      </ProductStoreContext>
    </BrowserRouter>
  </StrictMode>,
);
