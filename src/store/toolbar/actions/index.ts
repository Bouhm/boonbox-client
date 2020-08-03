export enum ToolbarActions {
  ToggleToolbar,
}

type ToggleToolbar = {
  type: ToolbarActions.ToggleToolbar;
  payload: boolean;
};

export type ToolbarActionTypes = ToggleToolbar;

export const toggleToolbar = (isOpen: boolean): ToolbarActionTypes => {
  return {
    type: ToolbarActions.ToggleToolbar,
    payload: isOpen,
  };
};
