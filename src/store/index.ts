import { combineReducers } from 'redux';

import { boardReducer } from './board/reducers';
import { canvasReducer } from './canvas/reducers';
import { sidebarReducer } from './sidebar/reducers';

export default combineReducers({
  board: boardReducer,
  canvas: canvasReducer,
  sidebar: sidebarReducer,
});
