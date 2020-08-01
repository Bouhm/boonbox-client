import { CanvasActionTypes, BoardActionTypes, BoardActions, CanvasActions } from '../types';
import { BoardProps } from '../../components/board/Board';
import { CanvasProps } from '../../components/board/Canvas';

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
