import { ReactLocation, Route } from "@tanstack/react-location";
import { history } from "./history";
import { sampleRoute } from "route/sampleRoute";
import React from "react";
import { TopPage } from "ui/page/top";

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

export const routes: Route[] = [sampleRoute].reduce(
    (prevRoute, currRoute) => prevRoute.concat(currRoute),
    indexRoute
);

export const location = new ReactLocation({ history: history });
