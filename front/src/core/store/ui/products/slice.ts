import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "./service";

export const UIProductSlice = createSlice({
    name: "ui/product",
    initialState,
    reducers,
});
