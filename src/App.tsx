import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/home/Index";
import Project from "./pages/project";
import Services from "./pages/services/Services";
import Blog from "./pages/blogs/Blogs";
import Barista from "./pages/barista/Barista";
import Warehouse from "./pages/warehouse/Warehouse";
import Error from "./pages/error/Error";
import About from "./pages/about/About";

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
  {
    path: "/about",
    element: <About />,
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
