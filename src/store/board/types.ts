import { IBoard } from '../../components/board/Board';
import { IObjectPiece } from '../../components/board/ObjectPiece';

type AddPieceAction = {
  type: 'ADD_PIECE';
  payload: IObjectPiece;
};

type RemovePieceAction = {
  type: 'REMOVE_PIECE';
  payload: IObjectPiece;
};

type UpdatePieceAction = {
  type: 'UPDATE_PIECE';
  payload: IObjectPiece;
};

type ChangeActiveLayerAction = {
  type: 'CHANGE_ACTIVE_LAYER';
  payload: number;
};

export type BoardActionTypes = AddPieceAction | RemovePieceAction | UpdatePieceAction | ChangeActiveLayerAction;

type ChangeBackgroundAction = {
  type: 'CHANGE_BACKGROUND';
  payload: string;
};

type RemoveBackgroundAction = {
  type: 'REMOVE_BACKGROUND';
  payload: string;
};

type SelectColorAction = {
  type: 'SELECT_COLOR';
  payload: string;
};

export type CanvasActionTypes = ChangeBackgroundAction | RemoveBackgroundAction | SelectColorAction;

type NewLayerAction = {
  type: 'NEW_LAYER';
  payload: number;
};

type DeleteLayerAction = {
  type: 'DELETE_LAYER';
  payload: number;
};

export type ToolbarActionTypes = NewLayerAction | DeleteLayerAction;
