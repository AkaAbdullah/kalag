import { Layout1 } from "../../layout/Layout1";
import { ErrorPage } from "../../pages/ErrorPage";
import { HomePage } from "../../pages/HomePage";

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
        path: "/amazon-services",
        element: <p>amazonservices</p>,
      },
      {
        path: "/services",
        element: <p>services</p>,
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
