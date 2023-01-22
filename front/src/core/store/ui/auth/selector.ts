import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";
import { UIAuth } from "./type";

export const UIAuthSelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/auth"],
    (state: UIAuth) => state
);
