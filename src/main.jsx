import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ClerkProvider publishableKey="pk_test_aW5maW5pdGUtY295b3RlLTIzLmNsZXJrLmFjY291bnRzLmRldiQ">
        <App />
      </ClerkProvider>
    </BrowserRouter>
  </StrictMode>
);
