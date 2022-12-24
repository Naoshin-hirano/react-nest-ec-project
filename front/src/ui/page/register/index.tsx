import React from "react";
import { Template } from "ui/component/template/register";
import { useCreateProps } from "./presentation";

export const RegisterPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
