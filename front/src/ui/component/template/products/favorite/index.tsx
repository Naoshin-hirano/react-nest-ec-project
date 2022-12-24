import React from "react";
import { FavoriteProducts } from "ui/component/organism/products/favorite";

export const Template: React.FC<any> = (props) => {
    return <FavoriteProducts {...props} />;
};
