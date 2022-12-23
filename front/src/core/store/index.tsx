import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { UIProfileSlice } from "./ui/profile/slice";

const appReducer = combineReducers({
    [UIProfileSlice.name]: UIProfileSlice.reducer,
});

const store = configureStore({
    reducer: appReducer,
});

const { dispatch } = store;
export type StateType = typeof store.getState;

export { store, dispatch };
