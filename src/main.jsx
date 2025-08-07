import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "react-hot-toast";
import App from "./App.jsx";

import "./styles/index.css";
import "./styles/fonts.css";

import TanstackQueryProvider from "./components/partials/provider/TanstackQueryProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TanstackQueryProvider>
      <App />
    </TanstackQueryProvider>
    <Toaster />
  </React.StrictMode>
);
