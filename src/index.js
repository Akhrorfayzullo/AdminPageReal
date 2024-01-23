import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import Root from "./components/root";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MotorComponent from "./components/pages/motors";
import CaravanComponent from "./components/pages/caravan";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Root />
      <Routes>
        <Route path="/motor" element={<MotorComponent />} />
        <Route path="/caravan" element={<CaravanComponent />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
