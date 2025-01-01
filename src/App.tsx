import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Index";
import Project from "./pages/project";
import Services from "./pages/services/Services";
import Blog from "./pages/blogs/Blogs";
import Barista from "./pages/barista/Barista";
import Warehouse from "./pages/warehouse/Warehouse";
import Error from "./pages/error/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/project",
    element: <Project />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/blogs",
    element: <Blog />,
  },
  {
    path: "/barista",
    element: <Barista />,
  },
  {
    path: "/warehouse",
    element: <Warehouse />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
