import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";
import { UICart } from "./type";

export const UICartSelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/cart"],
    (state: UICart) => state
);
