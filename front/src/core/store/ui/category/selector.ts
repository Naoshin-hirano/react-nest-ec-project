import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";
import { UICategoryState } from "./type";

export const UICategorySelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/category"],
    (state: UICategoryState) => state
);
