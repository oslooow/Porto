import { createBrowserRouter } from "react-router-dom";
import Landing from "../pages/landing";
import Projects from "../pages/projects";
import Layout from "../components/layout";
import Contacts from "../pages/contacts";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
    ],
  },
]);

export default router;
