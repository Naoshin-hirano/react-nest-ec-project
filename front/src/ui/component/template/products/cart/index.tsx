import React from "react";
import { CartProducts } from "ui/component/organism/products/cart";

export const Template: React.FC<any> = (props) => {
    return <CartProducts {...props} />;
};
