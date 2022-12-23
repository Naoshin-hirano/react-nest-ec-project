import { Route } from "@tanstack/react-location";
import React from "react";
import { SocondSamplePage } from "ui/page/second";
import { FirstSamplePage } from "ui/page/first";

export const sampleRoute: Route[] = [
    {
        path: "/sample/firstpage-sample",
        element: <FirstSamplePage />,
    },
    {
        path: "/sample/secondpage-sample",
        element: <SocondSamplePage />,
    },
];
