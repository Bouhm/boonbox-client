import { BoardActionTypes, CanvasActionTypes } from '../types';

export const changeBackground = (imgUrl: string): CanvasActionTypes => {
  return {
    type: 'CHANGE_BACKGROUND',
    payload: '',
  };
};

export const removeBackground = (): CanvasActionTypes => {
  return {
    type: 'REMOVE_BACKGROUND',
    payload: '',
  };
};

export const updateBoard = (): BoardActionTypes => {
  return {
    type: 'UPDATE_BOARD',
    payload: {},
  };
};
