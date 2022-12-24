import React from "react";
import { Template } from "ui/component/template/products/all";
import { useCreateProps } from "./presentation";

export const AllProductsPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
