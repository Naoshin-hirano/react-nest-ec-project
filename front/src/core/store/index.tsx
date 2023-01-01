import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UICartSlice } from "./ui/cart/slice";
import { UIModalSlice } from "./ui/product-modal/slice";
import { UIProfileSlice } from "./ui/profile/slice";

const appReducer = combineReducers({
    [UIProfileSlice.name]: UIProfileSlice.reducer,
    [UIModalSlice.name]: UIModalSlice.reducer,
    [UICartSlice.name]: UICartSlice.reducer,
});

const store = configureStore({
    reducer: appReducer,
});

const { dispatch } = store;
export type StateType = typeof store.getState;

export { store, dispatch };
