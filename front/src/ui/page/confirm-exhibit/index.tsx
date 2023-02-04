import React from "react";
import { Template } from "ui/component/template/confirm-exhibit";
import { useCreateProps } from "./presentation";

export const ExhibitConfirmPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
