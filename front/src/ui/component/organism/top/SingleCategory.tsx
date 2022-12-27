import React from "react";
import "./index.scss";

export const SingleCategory = () => {
    // if (status === STATUS.ERROR) return <Error />;
    // if (status === STATUS.LOADING) return <Loader />;

    return (
        <section className="cat-single py-5 bg-ghost-white">
            {/* {isModalVisible && <SingleProduct />} */}

            <div className="container">
                <div className="cat-single-content">
                    <div className="section-title">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                            ドライバー
                        </h3>
                    </div>
                    <div className="product-items grid">
                        {/* {products.map((product) => ( */}
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
