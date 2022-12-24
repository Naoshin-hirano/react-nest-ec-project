import React from "react";
import { Template } from "ui/component/template/products/history";
import { useCreateProps } from "./presentation";

export const HistoryPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
