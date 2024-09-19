import {
  createAction,
  createActionGroup,
  emptyProps,
  props,
} from "@ngrx/store";
import { Cv } from "../model/cv.model";

export const loadCvsAction = createAction("[Cv Component] load Cvs");
export const cvLoadedSuccessAction = createAction(
  "[Cv Effect] Cvs loaded success"
);
export const cvLoadedFailAction = createAction("[Cv Effect] Cvs loaded fail");
export const fromCvAction = createActionGroup({
  source: "Cv Component",
  events: {
    "load Cvs": emptyProps(),
    "Cvs loaded success": props<{ cvs: Cv[] }>(),
    "Cvs loaded fail": props<{ error: Error }>(),
  },
});
export const fromCvDetailsAction = createActionGroup({
  source: "Cv Details Component",
  events: {
    "load Cv": props<{ id: number }>(),
    "Cv loaded success": props<{ cv: Cv }>(),
    "Cv loaded fail": props<{ error: Error }>(),
  },
});
export const fromCvDeleteAction = createActionGroup({
  source: "Cv Details Component",
  events: {
    "Delete Cv": props<{ id: number }>(),
    "Cv Deleted success": props<{ id: number }>(),
    "Cv Deleted fail": props<{ error: Error }>(),
  },
});
