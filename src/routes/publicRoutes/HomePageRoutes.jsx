import { Layout1 } from "../../layout/Layout1";
import { AboutPage } from "../../pages/AboutPage";
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
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/portfolio",
        element: <p>Portfolio</p>,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <a href="/" />,
      },
    ],
  },
];
