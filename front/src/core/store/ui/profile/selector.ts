import { createSelector } from "@reduxjs/toolkit";
import { StateType } from "core/store";
import { UIProfile } from "./type";

export const UIProfileSelector = createSelector(
    (state: ReturnType<StateType>) => state["ui/profile"],
    (state: UIProfile) => state
);
