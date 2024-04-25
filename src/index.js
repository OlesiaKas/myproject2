import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import AppContextProvider from "./context/AppContext";
import "./variables.css";
import "./index.css";
import App from "./App";
import NewsComponent from "./components/Vmiblock/Vmiblock";

export const AppContext = createContext();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppContextProvider>
        <NewsComponent />
        <App />
      </AppContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
