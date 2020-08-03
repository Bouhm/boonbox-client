import './Toolbar.css';

import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addPiece } from '../../store/board/actions';
import { toggleToolbar } from '../../store/toolbar/actions';
import { AppState } from '../App';
import Input from '../form/Input';
import ObjectSelector from './ObjectSelector';

export type ToolbarProps = {
  isOpen?: boolean;
};

type Props = ToolbarProps & ConnectedProps<typeof connector>;

const Toolbar = ({ isOpen = true, addPiece, toggleToolbar }: Props) => {
  if (!isOpen) return null;

  const handleAddNewObject = () => {
    addPiece({ data: 'HELLO', type: 'text' });
  };

  return (
    <div className="Toolbar">
      <label>Background:</label>
      <Input />
      <ObjectSelector handleAddNewObject={handleAddNewObject} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return { ...state.toolbar };
};

const connector = connect(mapStateToProps, { addPiece, toggleToolbar });

export default connector(Toolbar);
