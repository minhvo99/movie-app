import { lazy, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "@pages/RootLayout.jsx";
import ModelProvider from "@context/ModelProvider";
const Home = lazy(() => import("@pages/Home"));
const MovieDetail = lazy(() => import("@pages/MovieDetail"));
const TVShowDetail = lazy(() => import("@pages/TVShowDetail"));
const PeopleDetail = lazy(() => import("@pages/PeopleDetail"));
const SearchPage = lazy(() => import("@pages/SearchPage"));

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
      {
        path: "/search",
        element: <SearchPage />,
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
