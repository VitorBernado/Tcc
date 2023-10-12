import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Peges
import Login from "./Routes/Login/Login.jsx";
import Register from "./Routes/Register/Register.jsx";
import Sidebar from "./Components/Sidebar/Sidebar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "Register",
    element: <Register />,
  },
  {
    path: "Sidebar",
    element: <Sidebar />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
