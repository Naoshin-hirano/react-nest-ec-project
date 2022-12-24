import React from "react";
import { Template } from "ui/component/template/products/cart";
import { useCreateProps } from "./presentation";

export const CartProductsPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
