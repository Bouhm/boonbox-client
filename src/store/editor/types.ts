interface ChangeBackgroundAction {
  type: 'CHANGE_BACKGROUND'
  payload: string
}

interface RemoveBackgroundAction {
  type: 'REMOVE_BACKGROUND'
  payload: string
}

export type EditorActionTypes = ChangeBackgroundAction | RemoveBackgroundAction
