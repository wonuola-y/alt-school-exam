import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./Style.css";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HelmetProvider } from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

    <React.StrictMode>
      <HelmetProvider>
      <BrowserRouter>
        <App />
        </BrowserRouter>
      </HelmetProvider>
    </React.StrictMode>
 
);
