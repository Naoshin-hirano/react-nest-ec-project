import { Link } from "@tanstack/react-location";
import { UIProduct } from "core/store/ui/products/type";
import React from "react";
import { CategoryPageProps } from "ui/component/template/category";
import { ProductList } from "../common/product-list";

export const Category: React.FC<CategoryPageProps> = ({
    paramsId,
    categoryList,
    productList,
}: CategoryPageProps) => {
    // parametersのカテゴリ
    const category = categoryList[Number(paramsId) - 1];
    const categorizedItems = productList.filter(
        (item: UIProduct) => item.categoryName === category.name
    );
    return (
        <div className="category-page">
            <div className="container">
                <div className="breadcrumb">
                    <ul className="breadcrumb-items flex">
                        <li className="breadcrumb-item">
                            <Link to="/">
                                <i className="fas fa-home"></i>
                                <span className="breadcrumb-separator">
                                    <i className="fas fa-chevron-right"></i>
                                </span>
                            </Link>
                        </li>
                        <li>
                            カテゴリー
                            <span className="breadcrumb-separator">
                                <i className="fas fa-chevron-right"></i>
                            </span>
                        </li>
                        <li>{category && category.name}</li>
                    </ul>
                </div>
            </div>
            <ProductList productList={categorizedItems} />
        </div>
    );
};
