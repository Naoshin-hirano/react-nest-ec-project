// import { UIProducts } from "./type";
import { PayloadAction } from "@reduxjs/toolkit";
import { UIProduct, UIProductState } from "./type";

export const initialState = {
    productList: [] as UIProduct[],
};

export const reducers = {
    getProductListAction: (
        _state: UIProductState,
        action: PayloadAction<UIProduct[]>
    ) => ({
        ..._state,
        productList: action.payload,
    }),
};
