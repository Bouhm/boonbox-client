import { PieceProps } from '../../components/board/Piece';
import { BoardProps } from '../../components/board/Board';

type AddPieceAction = {
  type: 'ADD_PIECE';
  payload: PieceProps;
};

type RemovePieceAction = {
  type: 'REMOVE_PIECE';
  payload: PieceProps;
};

type UpdatePieceAction = {
  type: 'UPDATE_PIECE';
  payload: PieceProps;
};

type UpdateBoardAction = {
  type: 'UPDATE_BOARD';
  payload: BoardProps;
};

export type BoardActionTypes = AddPieceAction | RemovePieceAction | UpdatePieceAction | UpdateBoardAction;

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
  payload: string
};

export type CanvasActionTypes = ChangeBackgroundAction | RemoveBackgroundAction | SelectColorAction;

type NewPieceAction = {
  type: 'NEW_PIECE';
  payload: PieceProps;
};

type DeletePieceAction = {
  type: 'DELETE_PIECE';
  payload: PieceProps;
};

type NewLayerAction = {
  type: 'NEW_LAYER';
  payload: number;
};

type DeleteLayerAction = {
  type: 'DELETE_LAYER'
  payload: number;
};

export type ToolbarActionTypes = NewPieceAction | DeletePieceAction | NewLayerAction | DeleteLayerAction;
