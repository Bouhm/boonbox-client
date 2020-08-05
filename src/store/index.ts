import { combineReducers } from 'redux';

import { boardReducer } from './board/reducers';
import { canvasReducer } from './canvas/reducers';
import { toolbarReducer } from './toolbar/reducers';

export default combineReducers({
  board: boardReducer,
  canvas: canvasReducer,
  toolbar: toolbarReducer,
});