import { BoardProps } from '../components/board/Board';
import { IObjectPiece } from '../components/board/ObjectPiece';
import { CanvasProps } from '../components/board/Canvas';
import { ToolbarProps } from '../components/toolbar/Toolbar';

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
  payload: ToolbarProps;
};

export type ToolbarActionTypes = ToggleToolbar;
