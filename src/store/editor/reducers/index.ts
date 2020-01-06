import { EditorActionTypes } from '../types'

interface EditorState {
  backgroundImg: string
  selectedLayer: number
}

const initialState: EditorState = {
  backgroundImg: '',
  selectedLayer: 0
}

const editorReducer = (state = initialState, action: EditorActionTypes) => {
  switch (action.type) {
    case 'CHANGE_BACKGROUND':
      return { ...state, backgroundImg: action.payload }
    case 'REMOVE_BACKGROUND':
      return { ...state, backgroundImg: '' }
    default:
      return state
  }
}

export default editorReducer
