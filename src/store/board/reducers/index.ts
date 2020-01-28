import { BoardActionTypes } from '../types';

type BoardState = {
  backgroundImg: string;
  selectedLayer: number;
};

const initialState: BoardState = {
  backgroundImg: '',
  selectedLayer: 0,
};

const boardReducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return { ...state, backgroundImg: action.payload };
    case 'REMOVE_BACKGROUND':
      return { ...state, backgroundImg: '' };
    default:
      return state;
  }
};

export default boardReducer;
