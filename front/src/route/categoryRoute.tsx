import { Route } from "@tanstack/react-location";
import React from "react";
import { CategoryPage } from "ui/page/category";

export const categoryRoute: Route[] = [
    {
        path: "/category/:id",
        element: <CategoryPage />,
    },
];
