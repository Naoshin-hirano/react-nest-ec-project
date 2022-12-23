import { PayloadAction } from "@reduxjs/toolkit";
import { UIProfile } from "./type";

export const initialState = {
    userInfo: {
        name: "",
        age: "",
        tel: "",
    },
    memberInfo: {
        name: "",
        age: "",
        tel: "",
    },
};

export const reducers = {
    updateFormAction: (_state: UIProfile, action: PayloadAction<UIProfile>) => {
        return action.payload;
    },
};
