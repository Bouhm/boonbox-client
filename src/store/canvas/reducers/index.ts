import { CanvasProps } from '../../../components/canvas/Canvas';
import { CanvasActions, CanvasActionTypes } from '../actions';

export const initialState: CanvasProps = {
  color: '#000',
  bgImgUrl: '',
};

export const canvasReducer = (state = initialState, action: CanvasActionTypes) => {
  switch (action.type) {
    case CanvasActions.SetCanvas:
      return action.payload;
    case CanvasActions.ChangeBackground:
      return { ...state, bgImgUrl: action.payload };
    case CanvasActions.SelectColor:
      return { ...state, color: action.payload };
    default:
      return state;
  }
};
