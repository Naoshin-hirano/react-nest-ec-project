import { Route } from "@tanstack/react-location";
import React from "react";
import { CartPage } from "ui/page/cart";

export const cartRoute: Route[] = [
    {
        path: "/cart",
        element: <CartPage />,
    },
];
