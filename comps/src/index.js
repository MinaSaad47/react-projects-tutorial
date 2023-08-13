import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NavigatorProvider } from "./context/NavigatorContext";

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);

root.render(
  <NavigatorProvider>
    <App />
  </NavigatorProvider>
);
