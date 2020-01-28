import { BoardActionTypes } from '../types';

export const changeBackground = (imgUrl: string): BoardActionTypes => {
  return {
    type: 'CHANGE_BACKGROUND',
    payload: imgUrl,
  };
};

export const removeBackground = (): BoardActionTypes => {
  return {
    type: 'REMOVE_BACKGROUND',
    payload: '',
  };
};
