import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";

export const UIModalSelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/modal"],
    (state: any) => state
);
