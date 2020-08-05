import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { toggleSidebar } from '../../store/sidebar/actions';
import { AppState } from '../App';
import Tools from './tools/Tools';
import './Sidebar.css';

export type SidebarProps = {
  isOpen?: boolean;
};

type Props = SidebarProps & ConnectedProps<typeof connector>;

const Sidebar = ({ isOpen = true, toggleSidebar }: Props) => {
  if (!isOpen) return null;

  return (
    <div className="Sidebar">
      <Tools />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return { ...state.sidebar };
};

const connector = connect(mapStateToProps, { toggleSidebar });

export default connector(Sidebar);
