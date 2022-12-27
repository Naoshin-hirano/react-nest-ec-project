import React from "react";
import { Template } from "ui/component/template/cart";
import { useCreateProps } from "./presentation";

export const CartPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
