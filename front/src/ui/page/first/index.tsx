import React from "react";
import { Template } from "ui/component/template/first";
import { useCreateProps } from "./presentation";

export const FirstSamplePage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
