import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "./service";

export const UIAuthSlice = createSlice({
    name: "ui/auth",
    initialState,
    reducers,
});
