import { combineReducers } from 'redux';

import { BoardActionTypes, CanvasActionTypes, ToolbarActionTypes } from '../types';
import { BoardProps } from '../../../components/board/Board';
import { ObjectProps } from '../../../components/board/Object';

type BoardState = {
  board: BoardProps;
  currentLayer: number;
};

type CanvasState = {
  bgImgUrl: string;
  color: string;
};

type ToolbarState = {
  pieces: ObjectProps | [];
  isOpen: boolean;
};

const initialState: BoardState | CanvasState | ToolbarState = {
  board: {},
  currentLayer: 0,
  bgImgUrl: '',
  color: 'black',
  pieces: [],
  isOpen: true,
};

const boardReducer = (state = initialState, action: BoardActionTypes) => {
  switch (action.type) {
    case 'ADD_PIECE':
      return { ...state, board: action.payload };
    case 'REMOVE_PIECE':
      return { ...state, board: action.payload };
    case 'UPDATE_PIECE':
      return { ...state, board: action.payload };
    case 'UPDATE_BOARD':
      return { ...state, board: action.payload };
    default:
      return state;
  }
};

const canvasReducer = (state = initialState, action: CanvasActionTypes) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return { ...state, bgImgUrl: action.payload };
    case 'REMOVE_BACKGROUND':
      return { ...state, bgImgUrl: '' };
    case 'SELECT_COLOR':
      return { ...state, canvas: action.payload };
    default:
      return state;
  }
};

const toolbarReducer = (state = initialState, action: ToolbarActionTypes) => {
  switch (action.type) {
    case 'NEW_PIECE':
      return { ...state, toolbar: action.payload };
    case 'DELETE_PIECE':
      return { ...state, toolbar: action.payload };
    case 'NEW_LAYER':
      return { ...state, toolbar: action.payload };
    case 'DELETE_LAYER':
      return { ...state, toolbar: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  board: boardReducer,
  canvas: canvasReducer,
  toolbar: toolbarReducer,
});
