import { Route } from "@tanstack/react-location";
import { ProtectedRoutes } from "core/usecase/common";
import React from "react";
import { CategoryPage } from "ui/page/category";

export const categoryRoute: Route[] = [
    {
        path: "/category",
        element: <ProtectedRoutes />,
        children: [
            {
                path: ":id",
                element: <CategoryPage />,
            },
        ],
    },
];
