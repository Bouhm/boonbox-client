import { BoardProps } from "../../../components/board/Board";
import { CanvasProps } from "../../../components/board/Canvas";
import { IObjectPiece } from "../../../components/board/ObjectPiece";

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
