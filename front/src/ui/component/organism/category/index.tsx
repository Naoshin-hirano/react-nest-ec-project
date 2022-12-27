import { Link } from "@tanstack/react-location";
import React from "react";
import { ProductList } from "../common/product-list";

export const Category: React.FC<any> = () => {
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
                        <li>ドライバー</li>
                    </ul>
                </div>
            </div>
            <ProductList />
        </div>
    );
};
