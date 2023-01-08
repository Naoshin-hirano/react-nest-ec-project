import { Link } from "@tanstack/react-location";
import { UICategory } from "core/store/ui/category/type";
import React from "react";
import "./index.scss";

type TopCategoryProps = {
    categoryList: UICategory[];
};

export const TopCategory = ({ categoryList }: TopCategoryProps) => {
    // if (status === STATUS.ERROR) return <Error />;
    // if (status === STATUS.LOADING) return <Loader />;

    return (
        <section className="categories py-5 bg-ghost-white" id="categories">
            <div className="container">
                <div className="categories-content">
                    <div className="section-title">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                            カテゴリー
                        </h3>
                    </div>
                    <div className="category-items grid">
                        {categoryList.map((category: UICategory) => (
                            <Link
                                key={category.id}
                                to={`category/${category.id}`}
                            >
                                <div className="category-item">
                                    <div className="category-item-img">
                                        <img
                                            src={category.image}
                                            alt="カテゴリーイメージ"
                                        />
                                    </div>
                                    <div className="category-item-name text-center">
                                        <h6 className="fs-20">
                                            {category.name}
                                        </h6>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
