import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./utilities/AuthContext.jsx";
import { MembershipProvider } from "./utilities/MembershipContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <MembershipProvider>
        <App />
      </MembershipProvider>
    </AuthProvider>
  </StrictMode>
);
