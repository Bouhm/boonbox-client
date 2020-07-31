import React, { useState } from 'react';

import Input from '../form/Input';
import Objects from './objects/ObjectSelector';

type ToolbarProps = {
  isOpen: boolean;
};

type ToolbarState = {
  tabIndex: number;
};

const Toolbar = ({ isOpen }: ToolbarProps) => {
  if (!isOpen) return null;

  handleAddNewObject = () => {

  }

  return (
    <div>
      <label>Background:</label>
      <Input />
      <Objects />
    </div>
  );
};

export default Toolbar;
