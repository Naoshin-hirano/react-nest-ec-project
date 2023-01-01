import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "./service";

export const UICartSlice = createSlice({
    name: "ui/cart",
    initialState,
    reducers,
});
