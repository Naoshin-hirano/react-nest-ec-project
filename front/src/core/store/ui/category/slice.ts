import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "./service";

export const UICategorySlice = createSlice({
    name: "ui/category",
    initialState,
    reducers,
});
