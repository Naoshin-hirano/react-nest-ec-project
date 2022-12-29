import { dispatch } from "core/store";
import { UIModalAction } from "core/store/ui/product-modal/actions";
import { UIModalSelector } from "core/store/ui/product-modal/selector";
import React from "react";
import { useSelector } from "react-redux";
import { ProductModal } from "../common/product-modal";
import "./index.scss";

export const SingleCategory = () => {
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
                            ドライバー
                        </h3>
                    </div>
                    <div className="product-items grid">
                        {/* {products.map((product) => ( */}
                        <div
                            className="product-item bg-white"
                            onClick={() => {
                                dispatch(UIModalAction.handleOpenModal(true));
                                dispatch(
                                    UIModalAction.updateProductData({
                                        title: "テイラーメイドT2",
                                        description: "最高の飛び心地",
                                        price: 5760,
                                        image:
                                            "https://www.taylormadegolf.jp/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1671944774352/zoom/JJC26_zoom_D.jpg",
                                    })
                                );
                            }}
                        >
                            <div className="product-item-img">
                                <img
                                    src="https://www.taylormadegolf.jp/on/demandware.static/-/Sites-tmag-master-catalog/ja_JP/v1671944774352/zoom/JJC26_zoom_D.jpg"
                                    alt=""
                                />
                                <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                                    アイアン
                                </div>
                            </div>
                            <div className="product-item-body">
                                <h6 className="product-item-title text-pine-green fw-4 fs-15">
                                    テイラーメイドT
                                </h6>
                                <div className="product-item-price text-regal-blue fw-7 fs-18">
                                    ¥5,760
                                </div>
                            </div>
                        </div>
                        <div className="product-item bg-white">
                            <div className="product-item-img">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                    alt=""
                                />
                                <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                                    ドライバー
                                </div>
                            </div>
                            <div className="product-item-body">
                                <h6 className="product-item-title text-pine-green fw-4 fs-15">
                                    テイラーメイドM4
                                </h6>
                                <div className="product-item-price text-regal-blue fw-7 fs-18">
                                    ¥5,760
                                </div>
                            </div>
                        </div>
                        <div className="product-item bg-white">
                            <div className="product-item-img">
                                <img
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                    alt=""
                                />
                                <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                                    ドライバー
                                </div>
                            </div>
                            <div className="product-item-body">
                                <h6 className="product-item-title text-pine-green fw-4 fs-15">
                                    テイラーメイドM4
                                </h6>
                                <div className="product-item-price text-regal-blue fw-7 fs-18">
                                    ¥5,760
                                </div>
                            </div>
                        </div>
                        {/* ))} */}
                    </div>
                </div>
            </div>
        </section>
    );
};
