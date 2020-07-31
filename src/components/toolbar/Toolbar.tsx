import React, { useState } from 'react';

import Input from '../form/Input';
import ObjectSelector from './ObjectSelector';
import "./Toolbar.css";

type ToolbarProps = {
  isOpen: boolean;
};

type ToolbarState = {
  tabIndex: number;
};

const Toolbar = ({ isOpen }: ToolbarProps) => {
  if (!isOpen) return null;

  const handleAddNewObject = () => {

  }

  return (
    <div className="Toolbar">
      <label>Background:</label>
      <Input />
      <ObjectSelector handleAddNewObject={handleAddNewObject} />
    </div>
  );
};

export default Toolbar;
