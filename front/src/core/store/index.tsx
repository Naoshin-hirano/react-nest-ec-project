import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UICartSlice } from "./ui/cart/slice";
import { UICategorySlice } from "./ui/category/slice";
import { UIModalSlice } from "./ui/product-modal/slice";
import { UIProductSlice } from "./ui/products/slice";

const appReducer = combineReducers({
    [UIProductSlice.name]: UIProductSlice.reducer,
    [UIModalSlice.name]: UIModalSlice.reducer,
    [UICartSlice.name]: UICartSlice.reducer,
    [UICategorySlice.name]: UICategorySlice.reducer,
});

const store = configureStore({
    reducer: appReducer,
});

const { dispatch } = store;
export type StateType = typeof store.getState;

export { store, dispatch };
