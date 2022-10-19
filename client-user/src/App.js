import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/movies",
          element: "MovieList",
        },
        {
          path: "/movies/:id",
          element: "MovieDetail",
        },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
