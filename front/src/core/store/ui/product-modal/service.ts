import { PayloadAction } from "@reduxjs/toolkit";

export const initialState = {
    productData: {
        title: "",
        description: "",
        price: 0,
        image: "",
    },
    isOpen: false,
};

export const reducers = {
    handleOpenModal: (_state: any, action: PayloadAction<boolean>) => ({
        ..._state,
        isOpen: action.payload,
    }),
    updateProductData: (_state: any, action: PayloadAction<any>) => ({
        ..._state,
        productData: action.payload,
    }),
};
