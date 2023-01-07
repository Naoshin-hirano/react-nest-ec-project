import { UICategory } from "core/store/ui/category/type";
import { UIProduct } from "core/store/ui/products/type";
import React from "react";
import { Category } from "ui/component/organism/category";

export type CategoryPageProps = {
    productList: UIProduct[];
    categoryList: UICategory[];
    paramsId: string;
};

export const Template: React.FC<CategoryPageProps> = (props) => {
    return <Category {...props} />;
};
