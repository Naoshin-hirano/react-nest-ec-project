import { Route } from "@tanstack/react-location";
import React from "react";
import { ProductDetailPage } from "ui/page/product/detail";
import { ProductEditPage } from "ui/page/product/edit";

export const productRoute: Route[] = [
    {
        path: "product",
        children: [
            {
                path: "detail/:id",
                element: <ProductDetailPage />,
            },
            {
                path: "edit",
                element: <ProductEditPage />,
            },
        ],
    },
];
