import { createBrowserRouter } from "react-router-dom";
import { homePageRoutes } from "./publicRoutes/HomePageRoutes";

export const allRoutes = [...homePageRoutes];

export const router = createBrowserRouter(allRoutes);
