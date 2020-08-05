export enum SidebarActions {
  ToggleSidebar,
}

type ToggleSidebar = {
  type: SidebarActions.ToggleSidebar;
  payload: boolean;
};

export type SidebarActionTypes = ToggleSidebar;

export const toggleSidebar = (isOpen: boolean): SidebarActionTypes => {
  return {
    type: SidebarActions.ToggleSidebar,
    payload: isOpen,
  };
};
