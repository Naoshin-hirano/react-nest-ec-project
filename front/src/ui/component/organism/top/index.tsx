import React from "react";
import { ProductList } from "../common/product-list";
import { SingleCategory } from "./SingleCategory";
import { TopCategory } from "./TopCategory";
import "./index.scss";
import { TopPageProps } from "ui/component/template/top";

export const Top: React.FC<TopPageProps> = (props) => {
    const { productList, categoryList } = props;
    return (
        <div className="home-page">
            {/* <Slider /> */}
            <TopCategory categoryList={categoryList} />
            <ProductList productList={productList} />
            <section>
                {categoryList?.map((category) => {
                    return (
                        <SingleCategory key={category.id} category={category} />
                    );
                })}
            </section>
        </div>
    );
};
