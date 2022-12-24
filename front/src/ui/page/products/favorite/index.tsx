import React from "react";
import { Template } from "ui/component/template/products/favorite";
import { useCreateProps } from "./presentation";

export const FavoriteProductsPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
