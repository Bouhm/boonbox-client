import { BoardProps } from "../../components/board/Board";
import { CanvasProps } from "../../components/board/Canvas";
import { IObjectPiece } from "../../components/board/ObjectPiece";

// Types

export enum BoardActions {
  SetBoard,
  AddPiece,
  RemovePiece,
  UpdatePiece,
}

type SetBoard = {
  type: BoardActions.SetBoard;
  payload: BoardProps;
};

type AddPiece = {
  type: BoardActions.AddPiece;
  payload: IObjectPiece;
};

type RemovePiece = {
  type: BoardActions.RemovePiece;
  payload: IObjectPiece;
};

type UpdatePiece = {
  type: BoardActions.UpdatePiece;
  payload: IObjectPiece;
};

export type BoardActionTypes = SetBoard | AddPiece | RemovePiece | UpdatePiece;

export enum CanvasActions {
  SetCanvas,
  ChangeBackground,
  SelectColor,
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

export enum ToolbarActions {
  ToggleToolbar,
}

type ToggleToolbar = {
  type: ToolbarActions.ToggleToolbar;
  payload: boolean;
};

export type ToolbarActionTypes = ToggleToolbar;

// Actions

export const addPiece = (piece: IObjectPiece): BoardActionTypes => {
  return {
    type: BoardActions.AddPiece,
    payload: piece,
  };
};

export const updatePiece = (piece: IObjectPiece): BoardActionTypes => {
  return {
    type: BoardActions.AddPiece,
    payload: piece,
  };
};

export const removePiece = (piece: IObjectPiece): BoardActionTypes => {
  return {
    type: BoardActions.AddPiece,
    payload: piece,
  };
};

export const setBoard = (board: BoardProps): BoardActionTypes => {
  return {
    type: BoardActions.SetBoard,
    payload: board,
  };
};

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

export const toggleToolbar = (isOpen: boolean): ToolbarActionTypes => {
  return {
    type: ToolbarActions.ToggleToolbar,
    payload: isOpen,
  };
};
