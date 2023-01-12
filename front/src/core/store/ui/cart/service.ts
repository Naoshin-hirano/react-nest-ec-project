import { PayloadAction } from "@reduxjs/toolkit";
import { UICart, UICartProduct } from "./type";

export const initialState = {
    cartProducts: [] as UICartProduct[],
    totalQty: 0,
    totalAmount: 0,
    deliveryCharge: 1000,
};

export const reducers = {
    // カートへ商品追加
    addProductToCart(_state: UICart, action: PayloadAction<UICartProduct>) {
        // 追加商品が重複しているかの判定
        const sameItem = _state.cartProducts.find(
            (item) => item.id === action.payload.id
        );
        // 追加商品がすでにカート内に重複している場合
        if (sameItem) {
            const newCart = _state.cartProducts.map((item: UICartProduct) => {
                // item1つ1つ見るためのif
                // 商品ID同じ：数量だけ増やす
                // 商品ID違う：配列要素追加
                if (item.id === action.payload.id) {
                    let itemQty = item.quantity;
                    let totalPrice = item.totalPrice;
                    itemQty += action.payload.quantity;
                    totalPrice *= itemQty;
                    return {
                        ...item,
                        quantity: itemQty,
                        totalPrice: totalPrice,
                    };
                } else {
                    return item;
                }
            });
            _state.cartProducts = [...newCart];
        } else {
            _state.cartProducts = [..._state.cartProducts, action.payload];
        }
    },
    // 指定商品をカートから削除
    removeProductFromCart(
        _state: UICart,
        action: PayloadAction<{ id: number }>
    ) {
        //カート内商品リストを削除
        _state.cartProducts = _state.cartProducts.filter(
            (item) => item.id !== action.payload.id
        );
    },
    // カート内商品をすべて削除
    removeAllProductFromCart: (_state: UICart) => ({
        ..._state,
        cartProducts: [],
        totalQty: 0,
        totalAmount: 0,
    }),
    // 指定商品の数量のincrement
    changeCartQty(
        _state: UICart,
        action: PayloadAction<{ id: number; type: string }>
    ) {
        const newCart = _state.cartProducts.map((item) => {
            if (item.id === action.payload.id) {
                let itemQty = item.quantity;
                let totalPrice = item.totalPrice;
                if (action.payload.type === "plus") {
                    if (itemQty < 10) {
                        itemQty++;
                        _state.totalQty++;
                        totalPrice = item.price * itemQty;
                    }
                }
                if (action.payload.type === "minus") {
                    if (itemQty > 1) {
                        itemQty--;
                        _state.totalQty--;
                        totalPrice = item.price * itemQty;
                    }
                }
                return { ...item, quantity: itemQty, totalPrice: totalPrice };
            } else {
                return item;
            }
        });
        _state.cartProducts = newCart;
    },
    getTotalResult(_state: UICart) {
        _state.totalAmount = _state.cartProducts.reduce(
            (cartTotal, cartItem) => {
                return (cartTotal += cartItem.totalPrice);
            },
            0
        );
        _state.totalQty = _state.cartProducts.reduce((cartQty, cartItem) => {
            return (cartQty += cartItem.quantity);
        }, 0);
    },
};
