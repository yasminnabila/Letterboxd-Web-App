import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import MovieList from "../pages/MovieList";
import MovieDetail from "../pages/MovieDetail";

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
        element: <MovieList />,
      },
      {
        path: "/movies/:slug",
        element: <MovieDetail />,
      },
    ],
  },
]);

export default router;
