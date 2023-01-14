import { PayloadAction } from "@reduxjs/toolkit";
import { UICart, UICartProduct } from "./type";

export const initialState = {
    cartProducts: [] as UICartProduct[],
    totalQty: 0,
    totalAmount: 0,
    deliveryCharge: 1000,
};

export const reducers = {
    // カート商品を更新
    updateCartProducts: (
        _state: UICart,
        action: PayloadAction<UICartProduct[]>
    ) => ({
        ..._state,
        cartProducts: action.payload,
    }),
    // カート商品をすべて削除
    removeAllProductFromCart: (_state: UICart) => ({
        ..._state,
        cartProducts: [],
        totalQty: 0,
        totalAmount: 0,
    }),
    // カートの中身の変化に伴い合計金額と合計数量を再計算
    getTotalResult: (_state: UICart, action: PayloadAction<any>) => ({
        ..._state,
        totalAmount: action.payload.totalAmount,
        totalQty: action.payload.totalQty,
    }),
};
