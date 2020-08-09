export enum SidebarActions {
  ToggleSidebar = 'TOGGLE_SIDEBAR',
  ChangeTab = 'CHANGE_TAB',
}

type ChangeTab = {
  type: SidebarActions.ChangeTab;
  payload: number;
};

type ToggleSidebar = {
  type: SidebarActions.ToggleSidebar;
  payload: boolean;
};

export type SidebarActionTypes = ChangeTab | ToggleSidebar;

export const changeTab = (tabIndex: number): SidebarActionTypes => {
  return {
    type: SidebarActions.ChangeTab,
    payload: tabIndex,
  };
};

export const toggleSidebar = (isOpen: boolean): SidebarActionTypes => {
  return {
    type: SidebarActions.ToggleSidebar,
    payload: isOpen,
  };
};
