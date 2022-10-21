import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Genre from "../pages/Genre";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Layout from "../layout/Layout";
import AddMovie from "../pages/AddMovie";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: `/addmovie`,
        element: <AddMovie />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
