import { Link } from "@tanstack/react-location";
import "./index.scss";
import React from "react";

export const Cart: React.FC<any> = () => {
    return (
        <div className="cart-page">
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
                        <li>カート</li>
                    </ul>
                </div>
            </div>
            <div className="bg-ghost-white py-5">
                <div className="container">
                    <div className="section-title bg-ghost-white">
                        <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
                            ショッピングカート
                        </h3>
                    </div>
                    {/* {cartProducts.length === 0 ? (
                        emptyCartMsg
                    ) : ( */}
                    <div className="cart-content grid">
                        <div className="cart-left">
                            <div className="cart-items grid">
                                {/* {cartProducts.map((cartProduct) => ( */}
                                <div className="cart-item grid">
                                    <div className="cart-item-img flex flex-column bg-white">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                            alt="テイラーメイドドライバーM4"
                                        />
                                        <button
                                            type="button"
                                            className="btn-square rmv-from-cart-btn"
                                        >
                                            <span className="btn-square-icon">
                                                <i className="fas fa-trash"></i>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="cart-item-info">
                                        <h6 className="fs-16 fw-5 text-light-blue">
                                            テーラーメイドM4
                                        </h6>
                                        <div className="qty flex">
                                            <span className="text-light-blue qty-text">
                                                数量:
                                            </span>
                                            <div className="qty-change flex">
                                                <button
                                                    type="button"
                                                    className="qty-dec fs-14"
                                                >
                                                    <i className="fas fa-minus text-light-blue"></i>
                                                </button>
                                                <span className="qty-value flex flex-center">
                                                    5
                                                </span>
                                                <button
                                                    type="button"
                                                    className="qty-inc fs-14 text-light-blue"
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-between">
                                            <div className="text-pine-green fw-4 fs-15 price">
                                                金額 :5,670
                                            </div>
                                            <div className="sub-total fw-6 fs-18 text-regal-blue">
                                                <span>小計: </span>
                                                <span className="">5,670</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="cart-item grid">
                                    <div className="cart-item-img flex flex-column bg-white">
                                        <img
                                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9z8JFWF3oihXJmFNGppPGiN5Tg1SC9d3dOg&usqp=CAU"
                                            alt="テイラーメイドドライバーM4"
                                        />
                                        <button
                                            type="button"
                                            className="btn-square rmv-from-cart-btn"
                                        >
                                            <span className="btn-square-icon">
                                                <i className="fas fa-trash"></i>
                                            </span>
                                        </button>
                                    </div>

                                    <div className="cart-item-info">
                                        <h6 className="fs-16 fw-5 text-light-blue">
                                            テーラーメイドM4
                                        </h6>
                                        <div className="qty flex">
                                            <span className="text-light-blue qty-text">
                                                数量:
                                            </span>
                                            <div className="qty-change flex">
                                                <button
                                                    type="button"
                                                    className="qty-dec fs-14"
                                                >
                                                    <i className="fas fa-minus text-light-blue"></i>
                                                </button>
                                                <span className="qty-value flex flex-center">
                                                    5
                                                </span>
                                                <button
                                                    type="button"
                                                    className="qty-inc fs-14 text-light-blue"
                                                >
                                                    <i className="fas fa-plus"></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="flex flex-between">
                                            <div className="text-pine-green fw-4 fs-15 price">
                                                金額 :5,670
                                            </div>
                                            <div className="sub-total fw-6 fs-18 text-regal-blue">
                                                <span>小計: </span>
                                                <span className="">5,670</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* ))} */}
                            </div>
                            <button type="button" className="btn-danger">
                                <span className="fs-16">
                                    カートの商品を削除する
                                </span>
                            </button>
                        </div>
                        <div className="cart-right bg-white">
                            <div className="cart-summary text-light-blue">
                                <div className="cart-summary-title">
                                    <h6 className="fs-20 fw-5">お会計</h6>
                                </div>
                                <ul className="cart-summary-info">
                                    <li className="flex flex-between">
                                        <span className="fw-4">
                                            4 個の商品の小計
                                        </span>
                                        <span className="fw-7">5,670</span>
                                    </li>
                                    <li className="flex flex-between">
                                        <span className="fw-4">割引</span>
                                        <span className="fw-7">
                                            <span className="fw-5 text-red">
                                                -&nbsp;
                                            </span>
                                            0
                                        </span>
                                    </li>
                                    <li className="flex flex-between">
                                        <span className="fw-4">配送料</span>
                                        <span className="fw-7">
                                            <span className="fw-5 text-gold">
                                                +&nbsp;
                                            </span>
                                            1,000
                                        </span>
                                    </li>
                                </ul>
                                <div className="cart-summary-total flex flex-between fs-18">
                                    <span className="fw-6">合計: </span>
                                    <span className="fw-6">99,999</span>
                                </div>
                                <div className="cart-summary-btn">
                                    <button
                                        type="button"
                                        className="btn-secondary"
                                    >
                                        購入手続きに進む
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* )} */}
                </div>
            </div>
        </div>
    );
};
