import { Route } from "@tanstack/react-location";
import { ProtectedRoutes } from "core/usecase/common";
import React from "react";
import { CartPage } from "ui/page/cart";
import { ExhibitConfirmPage } from "ui/page/confirm-exhibit";
import { ExhibitPage } from "ui/page/exhibit";

export const productRoute: Route[] = [
    {
        path: "/product",
        element: <ProtectedRoutes />,
        children: [
            {
                path: "/cart",
                element: <CartPage />,
            },
            {
                path: "/exhibit",
                element: <ExhibitPage />,
            },
            {
                path: "/confirm",
                element: <ExhibitConfirmPage />,
            },
        ],
    },
];
