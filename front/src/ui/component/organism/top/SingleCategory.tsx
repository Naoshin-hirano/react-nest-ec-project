import { dispatch } from "core/store";
import { UICategory } from "core/store/ui/category/type";
import { UIModalAction } from "core/store/ui/product-modal/actions";
import { UIModalSelector } from "core/store/ui/product-modal/selector";
import React from "react";
import { useSelector } from "react-redux";
import { numberToPrice } from "utils/helper";
import { ProductModal } from "../common/product-modal";
import "./index.scss";

type SingleCategoryProps = {
    category: UICategory;
};

export const SingleCategory = ({ category }: SingleCategoryProps) => {
    // if (status === STATUS.ERROR) return <Error />;
    // if (status === STATUS.LOADING) return <Loader />;

    // 商品詳細モーダルの状態管理
    const modalState = useSelector(UIModalSelector);
    return (
        <section className="cat-single py-5 bg-ghost-white">
            {modalState.isOpen && <ProductModal />}

            <div className="container">
                <div className="cat-single-content">
                    <div className="section-title">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                            {category && category.name}
                        </h3>
                    </div>
                    <div className="product-items grid">
                        {category &&
                            category.products.map((product) => (
                                <div
                                    key={product.id}
                                    className="product-item bg-white"
                                    onClick={() => {
                                        dispatch(
                                            UIModalAction.handleOpenModal(true)
                                        );
                                        dispatch(
                                            UIModalAction.updateProductData({
                                                title: product.title,
                                                description:
                                                    product.description,
                                                price: product.price,
                                                image: product.image,
                                            })
                                        );
                                    }}
                                >
                                    <div className="product-item-img">
                                        <img
                                            src={product.image}
                                            alt="商品イメージ"
                                        />
                                        <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                                            {category && category.name}
                                        </div>
                                    </div>
                                    <div className="product-item-body">
                                        <h6 className="product-item-title text-pine-green fw-4 fs-15">
                                            {product.title}
                                        </h6>
                                        <div className="product-item-price text-regal-blue fw-7 fs-18">
                                            {numberToPrice(product.price)}
                                        </div>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
