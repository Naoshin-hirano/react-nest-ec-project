import { Link } from "@tanstack/react-location";
import "./index.scss";
import React, { useCallback, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { UICartSelector } from "core/store/ui/cart/selector";
import { UICartProduct } from "core/store/ui/cart/type";
import { dispatch } from "core/store";
import { UICartAction } from "core/store/ui/cart/actions";
import { numberToPrice } from "utils/helper";

export const Cart: React.FC<any> = () => {
    const scroll = useRef<HTMLDivElement>(null);
    const scrollToBottomOfList = useCallback(() => {
        scroll!.current!.scrollIntoView({
            behavior: "smooth",
            block: "end",
        });
    }, [scroll]);

    const cartState = useSelector(UICartSelector);

    const toggleItemQty = (id: number, type: string) => {
        dispatch(
            UICartAction.changeCartQty({
                id: id,
                type: type,
            })
        );
        dispatch(UICartAction.getTotalResult());
    };

    useEffect(() => {
        scrollToBottomOfList();
    }, [scrollToBottomOfList]);
    return (
        <div className="cart-page">
            <div ref={scroll}></div>
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
                    {cartState.cartProducts.length === 0 ? (
                        <h4 className="text-red fw-6">
                            カートの商品が存在しません
                        </h4>
                    ) : (
                        <div className="cart-content grid">
                            <div className="cart-left">
                                <div className="cart-items grid">
                                    {cartState.cartProducts.map(
                                        (product: UICartProduct) => (
                                            <div
                                                className="cart-item grid"
                                                key={product.id}
                                            >
                                                <div className="cart-item-img flex flex-column bg-white">
                                                    <img
                                                        src={product.image}
                                                        alt="商品イメージ"
                                                    />
                                                    <button
                                                        type="button"
                                                        className="btn-square rmv-from-cart-btn"
                                                        onClick={() => {
                                                            dispatch(
                                                                UICartAction.removeProductFromCart(
                                                                    {
                                                                        id:
                                                                            product.id,
                                                                    }
                                                                )
                                                            );
                                                        }}
                                                    >
                                                        <span className="btn-square-icon">
                                                            <i className="fas fa-trash"></i>
                                                        </span>
                                                    </button>
                                                </div>

                                                <div className="cart-item-info">
                                                    <h6 className="fs-16 fw-5 text-light-blue">
                                                        {product.title}
                                                    </h6>
                                                    <div className="qty flex">
                                                        <span className="text-light-blue qty-text">
                                                            数量:
                                                        </span>
                                                        <div className="qty-change flex">
                                                            <button
                                                                type="button"
                                                                className="qty-dec fs-14"
                                                                onClick={() => {
                                                                    toggleItemQty(
                                                                        product.id,
                                                                        "minus"
                                                                    );
                                                                }}
                                                            >
                                                                <i className="fas fa-minus text-light-blue"></i>
                                                            </button>
                                                            <span className="qty-value flex flex-center">
                                                                {
                                                                    product.quantity
                                                                }
                                                            </span>
                                                            <button
                                                                type="button"
                                                                className="qty-inc fs-14 text-light-blue"
                                                                onClick={() => {
                                                                    toggleItemQty(
                                                                        product.id,
                                                                        "plus"
                                                                    );
                                                                }}
                                                            >
                                                                <i className="fas fa-plus"></i>
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className="flex flex-between">
                                                        <div className="text-pine-green fw-4 fs-15 price">
                                                            金額 :
                                                            {numberToPrice(
                                                                product.price
                                                            )}
                                                        </div>
                                                        <div className="sub-total fw-6 fs-18 text-regal-blue">
                                                            <span>小計: </span>
                                                            <span className="">
                                                                {numberToPrice(
                                                                    product.totalPrice
                                                                )}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>
                                <button
                                    type="button"
                                    className="btn-danger"
                                    onClick={() => {
                                        dispatch(
                                            UICartAction.removeAllProductFromCart()
                                        );
                                    }}
                                >
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
                                                {cartState.totalQty}
                                                個の商品の小計
                                            </span>
                                            <span className="fw-7">
                                                {numberToPrice(
                                                    cartState.subTotal
                                                )}
                                            </span>
                                        </li>
                                        <li className="flex flex-between">
                                            <span className="fw-4">割引</span>
                                            <span className="fw-7">
                                                <span className="fw-5 text-red">
                                                    -&nbsp;
                                                </span>
                                                {numberToPrice(0)}
                                            </span>
                                        </li>
                                        <li className="flex flex-between">
                                            <span className="fw-4">配送料</span>
                                            <span className="fw-7">
                                                <span className="fw-5 text-gold">
                                                    +&nbsp;
                                                </span>
                                                {numberToPrice(
                                                    cartState.deliveryCharge
                                                )}
                                            </span>
                                        </li>
                                    </ul>
                                    <div className="cart-summary-total flex flex-between fs-18">
                                        <span className="fw-6">合計: </span>
                                        <span className="fw-6">
                                            {numberToPrice(
                                                cartState.totalAmount
                                            )}
                                        </span>
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
                    )}
                </div>
            </div>
        </div>
    );
};
