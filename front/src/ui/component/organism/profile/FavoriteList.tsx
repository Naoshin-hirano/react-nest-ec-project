import React from "react";
import "./index.scss";

export const FavoriteList = () => {
    // if (status === STATUS.ERROR) return <Error />;
    // if (status === STATUS.LOADING) return <Loader />;

    return (
        <section className="product py-5 bg-ghost-white" id="products">
            {/* {isModalVisible && <SingleProduct />} */}

            <div className="container">
                <div className="product-content">
                    <div className="section-title">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                            お気に入り商品一覧
                        </h3>
                    </div>
                    <div className="product-items grid">
                        {/* {products.slice(0, 20).map((product) => ( */}
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
                        </div>
                        {/* ))} */}
                    </div>
                </div>
            </div>
        </section>
    );
};
