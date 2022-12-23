import { createSlice } from "@reduxjs/toolkit";
import { initialState, reducers } from "./service";

export const UIProfileSlice = createSlice({
    name: "ui/profile",
    initialState,
    reducers,
});
