import { PayloadAction } from "@reduxjs/toolkit";
import { UIModal, UIProductData } from "./type";

export const initialState = {
    productData: {
        id: 0,
        title: "",
        description: "",
        price: 0,
        image: "",
    },
    isOpen: false,
};

export const reducers = {
    handleOpenModal: (_state: UIModal, action: PayloadAction<boolean>) => ({
        ..._state,
        isOpen: action.payload,
    }),
    updateProductData: (
        _state: UIModal,
        action: PayloadAction<UIProductData>
    ) => ({
        ..._state,
        productData: action.payload,
    }),
};
