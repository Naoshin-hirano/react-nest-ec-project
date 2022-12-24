import { Route } from "@tanstack/react-location";
import React from "react";
import { RegisterPage } from "ui/page/register";
import { LoginPage } from "ui/page/login";

export const authRoute: Route[] = [
    {
        path: "/register",
        element: <RegisterPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
];
