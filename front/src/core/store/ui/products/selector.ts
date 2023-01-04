import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";
import { UIProductState } from "./type";

export const UIProductSelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/product"],
    (state: UIProductState) => state
);
