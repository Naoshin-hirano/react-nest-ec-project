import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "./service";

export const UIModalSlice = createSlice({
    name: "ui/modal",
    initialState,
    reducers,
});
