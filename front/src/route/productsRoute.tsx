import { Route } from "@tanstack/react-location";
import React from "react";
import { FavoriteProductsPage } from "ui/page/products/favorite";
import { AllProductsPage } from "ui/page/products/all";
import { CartProductsPage } from "ui/page/products/cart";
import { HistoryPage } from "ui/page/products/history";

export const productsRoute: Route[] = [
    {
        path: "products",
        children: [
            {
                path: "all",
                element: <AllProductsPage />,
            },
            {
                path: "favorite",
                element: <FavoriteProductsPage />,
            },
            {
                path: "cart",
                element: <CartProductsPage />,
            },
            {
                path: "history",
                element: <HistoryPage />,
            },
        ],
    },
];
