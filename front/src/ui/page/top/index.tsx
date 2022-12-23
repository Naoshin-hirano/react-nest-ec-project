import React from "react";
import { Template } from "ui/component/template/top";
import { useCreateProps } from "./presentation";

export const TopPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
