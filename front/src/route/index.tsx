import { ReactLocation, Route } from "@tanstack/react-location";
import { history } from "./history";
import { authRoute } from "route/authRoute";
import React from "react";
import { TopPage } from "ui/page/top";
import { productsRoute } from "./productsRoute";
import { productRoute } from "./productRoute";
import { profileRoute } from "./profileRoute";

const indexRoute: Route[] = [
    {
        path: "/",
        element: <TopPage />,
    },
    {
        path: "/top",
        element: <TopPage />,
    },
];

export const routes: Route[] = [
    authRoute,
    productsRoute,
    productRoute,
    profileRoute,
].reduce((prevRoute, currRoute) => prevRoute.concat(currRoute), indexRoute);

export const location = new ReactLocation({ history: history });
