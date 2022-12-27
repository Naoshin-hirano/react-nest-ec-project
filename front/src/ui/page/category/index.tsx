import React from "react";
import { Template } from "ui/component/template/category";
import { useCreateProps } from "./presentation";

export const CategoryPage: React.FC = () => {
    const props = useCreateProps();
    return <Template {...props}></Template>;
};
