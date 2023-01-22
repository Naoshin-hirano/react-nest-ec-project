import { PayloadAction } from "@reduxjs/toolkit";
import { UIAuth, UIAuthUser } from "./type";

export const initialState = {
    authState: {
        id: "",
        username: "",
        status: false,
        imageName: "",
    },
};

export const reducers = {
    setAuthState: (_state: UIAuth, action: PayloadAction<UIAuthUser>) => ({
        ..._state,
        authState: action.payload,
    }),
};
