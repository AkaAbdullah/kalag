import { Layout1 } from "../../layout/Layout1";
import { ErrorPage } from "../../pages/ErrorPage";
import { HomePage } from "../../pages/HomePage";
import { ServicesPage } from "../../pages/ServicesPage";

export const homePageRoutes = [
  {
    path: "/",
    element: <Layout1 />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
      {
        path: "/",
        element: <p>amazonservices</p>,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/read-guides",
        element: <p>Read Guides</p>,
      },
      {
        path: "/about",
        element: <p>About</p>,
      },
    ],
  },
];
