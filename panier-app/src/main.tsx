import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import CartListSmart from "./smart/cartListSmart.tsx";
import "./index.css";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/cart" element={<CartListSmart />} />
    </Routes>
      <Toaster></Toaster>
  </BrowserRouter>
);
