import './Sidebar.css';

import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { toggleSidebar } from '../../store/sidebar/actions';
import { AppState } from '../App';
import TabContainer from './Tabs';
import Tools from './tools/Tools';

const Tabs = ['Board', 'DnD'];

const SidebarContent = () => {
  return <div className="Sidebar-Content">{}</div>;
};

export type SidebarProps = {
  isOpen?: boolean;
  activeTab: number;
};

type Props = SidebarProps & ConnectedProps<typeof connector>;

const Sidebar = ({ isOpen = true, activeTab, toggleSidebar }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="Sidebar">
      <TabContainer tabs={Tabs} activeTab={activeTab} />
      <Tools />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return { ...state.sidebar };
};

const connector = connect(mapStateToProps, { toggleSidebar });

export default connector(Sidebar);
