import { Route } from "@tanstack/react-location";
import React from "react";
import { ProfilePage } from "ui/page/profile";

export const profileRoute: Route[] = [
    {
        path: "/profile/:id",
        element: <ProfilePage />,
    },
];
