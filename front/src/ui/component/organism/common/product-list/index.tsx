import { dispatch } from "core/store";
import { UIModalAction } from "core/store/ui/product-modal/actions";
import { UIModalSelector } from "core/store/ui/product-modal/selector";
import { UIProduct } from "core/store/ui/products/type";
import React from "react";
import { useSelector } from "react-redux";
import { numberToPrice } from "utils/helper";
import { ProductModal } from "../product-modal";
import "./index.scss";

type ProductListProps = {
    productList: UIProduct[];
};

export const ProductList = ({ productList }: ProductListProps) => {
    // if (status === STATUS.ERROR) return <Error />;
    // if (status === STATUS.LOADING) return <Loader />;

    // 商品詳細モーダルの状態管理
    const modalState = useSelector(UIModalSelector);
    return (
        <section className="product py-5 bg-ghost-white" id="products">
            {modalState.isOpen && <ProductModal />}

            <div className="container">
                <div className="product-content">
                    <div className="section-title">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                            商品一覧
                        </h3>
                    </div>
                    <div className="product-items grid">
                        {productList &&
                            productList
                                .slice(0, 20)
                                .map((product: UIProduct) => (
                                    <div
                                        className="product-item bg-white"
                                        key={product.id}
                                        onClick={() => {
                                            dispatch(
                                                UIModalAction.handleOpenModal(
                                                    true
                                                )
                                            );
                                            dispatch(
                                                UIModalAction.updateProductData(
                                                    {
                                                        id: product.id,
                                                        title: product.title,
                                                        description:
                                                            product.description,
                                                        price: product.price,
                                                        image: product.image,
                                                    }
                                                )
                                            );
                                        }}
                                    >
                                        <div className="product-item-img">
                                            <img
                                                src={product.image}
                                                alt="商品イメージ"
                                            />
                                            <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                                                {product.categoryName}
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
