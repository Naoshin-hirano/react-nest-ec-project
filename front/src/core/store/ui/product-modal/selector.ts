import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";
import { UIModal } from "./type";

export const UIModalSelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/modal"],
    (state: UIModal) => state
);
