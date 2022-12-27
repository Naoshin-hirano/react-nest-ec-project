import React from "react";
import { ProductList } from "../common/product-list";
import { SingleCategory } from "./SingleCategory";
import { TopCategory } from "./TopCategory";
import "./index.scss";

export const Top: React.FC<any> = () => {
    return (
        <div className="home-page">
            {/* <Slider /> */}
            <TopCategory />
            <ProductList />
            <section>
                {/* {productsByCategoryMock[0] && (
                     <SingleCategory
                         products={productsByCategoryMock[0]}
                         // products={productsByCategory[0]}
                         status={catProductAllStatus}
                     />
                 )} */}
                <SingleCategory />
            </section>
            <section>
                {/* {productsByCategoryMock[1] && (
                     <SingleCategory
                         products={productsByCategoryMock[1]}
                         status={catProductAllStatus}
                     />
                 )} */}
                <SingleCategory />
            </section>
        </div>
    );
};
