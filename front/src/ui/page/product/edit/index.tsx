import React from "react";
import { Template } from "ui/component/template/product/edit";
import { useCreateProps } from "./presentation";

export const ProductEditPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
