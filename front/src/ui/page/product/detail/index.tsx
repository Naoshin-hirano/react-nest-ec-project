import React from "react";
import { Template } from "ui/component/template/product/detail";
import { useCreateProps } from "./presentation";

export const ProductDetailPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
