import { dispatch } from "core/store";
import { UIModalAction } from "core/store/ui/product-modal/actions";
import { UIModalSelector } from "core/store/ui/product-modal/selector";
import React, { useState } from "react";
import { history } from "../../../../../route/history";
import { useSelector } from "react-redux";
import "./index.scss";
import { numberToPrice } from "utils/helper";
import * as Usecase from "../../../../../core/usecase/cart";
import { UICartSelector } from "core/store/ui/cart/selector";

export const ProductModal = () => {
    // このモーダルのグローバル状態管理
    const modalState = useSelector(UIModalSelector);
    const cartState = useSelector(UICartSelector);

    // 数量の状態管理
    const [qty, setQty] = useState(1);

    // 数量を減らす
    const minusQty = () => {
        if (qty === 1) {
            return;
        }
        setQty(qty - 1);
    };
    // 数量を増やす
    const plusQty = () => {
        if (qty === 10) {
            return;
        }
        setQty(qty + 1);
    };

    // どの商品をいくつカートへ追加するか
    const addToCart = async () => {
        // モーダルを閉じる
        dispatch(UIModalAction.handleOpenModal(false));
        // カートへ指定商品を追加({商品データとqty})
        Usecase.addProductToCart(cartState.cartProducts, {
            id: modalState.productData.id,
            title: modalState.productData.title,
            description: modalState.productData.description,
            price: modalState.productData.price,
            image: modalState.productData.image,
            quantity: qty,
            totalPrice: modalState.productData.price * qty,
        });
        history.push("/product/cart");
    };
    return (
        <div className="overlay-bg">
            <div className="product-details-modal bg-white">
                <button
                    type="button"
                    className="modal-close-btn flex flex-center fs-14"
                    onClick={() => {
                        dispatch(UIModalAction.handleOpenModal(false));
                    }}
                >
                    <i className="fas fa-times"></i>
                </button>
                <div className="details-content grid">
                    {/* details left */}
                    <div className="details-right">
                        <div className="details-img">
                            <img
                                src={modalState.productData.image}
                                alt="商品イメージ"
                            />
                        </div>
                    </div>
                    {/* detials right */}
                    <div className="details-left">
                        <div className="details-info">
                            <h3 className="title text-regal-blue fs-22 fw-5">
                                {modalState.productData.title}
                            </h3>
                            <p className="description text-pine-green">
                                {modalState.productData.description}
                            </p>
                            <div className="price fw-7 fs-24">
                                金額:
                                {numberToPrice(modalState.productData.price)}
                            </div>
                            <div className="qty flex">
                                <span className="text-light-blue qty-text">
                                    数量:
                                </span>
                                <div className="qty-change flex">
                                    <button
                                        type="button"
                                        className="qty-dec fs-14"
                                        onClick={() => {
                                            minusQty();
                                        }}
                                    >
                                        <i className="fas fa-minus text-light-blue"></i>
                                    </button>
                                    <span className="qty-value flex flex-center">
                                        {qty}
                                    </span>
                                    <button
                                        type="button"
                                        className="qty-inc fs-14 text-light-blue"
                                        onClick={() => {
                                            plusQty();
                                        }}
                                    >
                                        <i className="fas fa-plus"></i>
                                    </button>
                                </div>
                            </div>
                            <button
                                type="button"
                                className="btn-primary add-to-cart-btn"
                            >
                                <span className="btn-icon">
                                    <i className="fas fa-cart-shopping"></i>
                                </span>
                                <span
                                    className="btn-text"
                                    onClick={() => {
                                        addToCart();
                                    }}
                                >
                                    カートへ追加する
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
