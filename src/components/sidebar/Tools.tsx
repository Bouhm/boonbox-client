import './Toolbar.css';

import React, { ChangeEvent, useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addPiece } from '../../store/board/actions';
import { toggleToolbar } from '../../store/toolbar/actions';
import { AppState } from '../App';
import Input from '../form/Input';
import ObjectSelector from './ObjectSelector';
import useForm from '../form/useForm';

export type ToolsProps = {
  isOpen?: boolean;
};

type Props = ToolsProps & ConnectedProps<typeof connector>;

const Tools = ({ isOpen = true, addPiece, toggleToolbar }: Props) => {
  const bgInputName = 'background';
  const objValName = 'value';
  const { formData, handleInputChange } = useForm({ [bgInputName]: '', [objValName]: '' });

  if (!isOpen) return null;

  const handleAddNewObject = () => {
    const key =
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9);

    addPiece({
      key,
      data: formData[objValName],
      type: 'text',
    });
  };

  return (
    <div className="Toolbar">
      <Input name={bgInputName} value={formData[bgInputName]} onChange={handleInputChange} />
      <ObjectSelector handleAddNewObject={handleAddNewObject} />
      <Input name={objValName} value={formData[objValName]} onChange={handleInputChange} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return { ...state.toolbar };
};

const connector = connect(mapStateToProps, { addPiece, toggleToolbar });

export default connector(Tools);
