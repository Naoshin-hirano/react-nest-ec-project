import { Route } from "@tanstack/react-location";
import { ProtectedRoutes } from "core/usecase/common";
import React from "react";
import { CartPage } from "ui/page/cart";

export const cartRoute: Route[] = [
    {
        path: "/product",
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/cart",
                element: <CartPage />,
            },
        ],
    },
];
