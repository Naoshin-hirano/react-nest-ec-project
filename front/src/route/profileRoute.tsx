import { Route } from "@tanstack/react-location";
import { ProtectedRoutes } from "core/usecase/common";
import React from "react";
import { ProfilePage } from "ui/page/profile";

export const profileRoute: Route[] = [
    {
        path: "/profile",
        element: <ProtectedRoutes />,
        children: [
            {
                path: ":id",
                element: <ProfilePage />,
            },
        ],
    },
];
