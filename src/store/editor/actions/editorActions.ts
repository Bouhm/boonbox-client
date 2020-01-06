import { EditorActionTypes } from '../types'

export const changeBackground = (imgUrl: string): EditorActionTypes => {
  return {
    type: 'CHANGE_BACKGROUND',
    payload: imgUrl
  }
}

export const removeBackground = (): EditorActionTypes => {
  return {
    type: 'REMOVE_BACKGROUND',
    payload: ''
  }
}
