import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "@pages/Home.jsx";
import MovieDetail from "@pages/MovieDetail.jsx";
import RootLayout from "@pages/RootLayout.jsx";
import TVShowDetail from "@pages/TVShowDetail";
import ModelProvider from "@context/ModelProvider";
import PeopleDetail from "@pages/PeopleDetail";

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },
      {
        path: "/tv/:id",
        element: <TVShowDetail />,
      },
      {
        path: "/people/:id",
        element: <PeopleDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ModelProvider>
      <RouterProvider router={router}></RouterProvider>
    </ModelProvider>
  </StrictMode>,
);
