import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import TicketApp from "./TicketApp";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TicketApp />
  </React.StrictMode>
);

reportWebVitals();
