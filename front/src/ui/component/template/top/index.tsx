import { UICategory } from "core/store/ui/category/type";
import { UIProduct } from "core/store/ui/products/type";
import React from "react";
import { Top } from "ui/component/organism/top";

export type TopPageProps = {
    productList: UIProduct[];
    categoryList: UICategory[];
};

export const Template: React.FC<TopPageProps> = (props) => {
    return <Top {...props} />;
};
