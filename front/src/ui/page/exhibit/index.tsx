import React from "react";
import { Template } from "ui/component/template/exhibit";
import { useCreateProps } from "./presentation";

export const ExhibitPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
