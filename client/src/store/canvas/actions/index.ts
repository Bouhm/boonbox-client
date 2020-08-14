import { CanvasProps } from "../../../components/canvas/Canvas";

export enum CanvasActions {
  SetCanvas = 'SET_CANVAS',
  ChangeBackground = 'CHANGE_BACKGROUND',
  SelectColor = 'SELECT_COLOR',
}

type SetCanvas = {
  type: CanvasActions.SetCanvas;
  payload: CanvasProps;
};

type ChangeBackground = {
  type: CanvasActions.ChangeBackground;
  payload: string;
};

type SelectColor = {
  type: CanvasActions.SelectColor;
  payload: string;
};

export type CanvasActionTypes = SetCanvas | ChangeBackground | SelectColor;

export const setCanvas = (canvas: CanvasProps): CanvasActionTypes => {
  return {
    type: CanvasActions.SetCanvas,
    payload: canvas,
  };
};

export const changeBackground = (imgUrl: string): CanvasActionTypes => {
  return {
    type: CanvasActions.ChangeBackground,
    payload: imgUrl,
  };
};

export const selectColor = (color: string): CanvasActionTypes => {
  return {
    type: CanvasActions.SelectColor,
    payload: color,
  };
};
