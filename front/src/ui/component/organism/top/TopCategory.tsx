import { Link } from "@tanstack/react-location";
import React from "react";
import "./index.scss";

export const TopCategory = () => {
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
                        {/* {categories.slice(0, 5).map((category) => ( */}
                        <Link to={`category/1`}>
                            <div className="category-item">
                                <div className="category-item-img">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                        alt=""
                                    />
                                </div>
                                <div className="category-item-name text-center">
                                    <h6 className="fs-20">ドライバー</h6>
                                </div>
                            </div>
                        </Link>
                        <Link to={`category/1`}>
                            <div className="category-item">
                                <div className="category-item-img">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                        alt=""
                                    />
                                </div>
                                <div className="category-item-name text-center">
                                    <h6 className="fs-20">ドライバー</h6>
                                </div>
                            </div>
                        </Link>
                        <Link to={`category/1`}>
                            <div className="category-item">
                                <div className="category-item-img">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                        alt=""
                                    />
                                </div>
                                <div className="category-item-name text-center">
                                    <h6 className="fs-20">ドライバー</h6>
                                </div>
                            </div>
                        </Link>
                        <Link to={`category/1`}>
                            <div className="category-item">
                                <div className="category-item-img">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                        alt=""
                                    />
                                </div>
                                <div className="category-item-name text-center">
                                    <h6 className="fs-20">ドライバー</h6>
                                </div>
                            </div>
                        </Link>
                        {/* ))} */}
                    </div>
                </div>
            </div>
        </section>
    );
};
