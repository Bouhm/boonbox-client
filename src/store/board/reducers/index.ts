import { BoardActionTypes } from '../types';

type BoardState = {
  bgImgUrl: string;
  selectedLayer: number;
};

const initialState: BoardState = {
  bgImgUrl: '',
  selectedLayer: 0,
};

const boardReducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return { ...state, bgImgUrl: action.payload };
    case 'REMOVE_BACKGROUND':
      return { ...state, bgImgUrl: '' };
    default:
      return state;
  }
};

export default boardReducer;
