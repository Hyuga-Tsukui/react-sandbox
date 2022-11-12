import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SampleContextProvider } from "./components/core/SampleContextProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SampleContextProvider>
      <App />
    </SampleContextProvider>
  </React.StrictMode>
);
