import { PayloadAction } from "@reduxjs/toolkit";
import { UICategory, UICategoryState } from "./type";

export const initialState = {
    categoryList: [] as UICategory[],
};

export const reducers = {
    getCategoryListAction: (
        _state: UICategoryState,
        action: PayloadAction<UICategory[]>
    ) => ({
        ..._state,
        categoryList: action.payload,
    }),
};
