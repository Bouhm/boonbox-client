import React, { useState } from 'react';

import Input from '../form/Input';

type ToolbarProps = {
  isOpen: boolean;
};

type ToolbarState = {
  tabIndex: number;
};

const Toolbar = ({ isOpen }: ToolbarProps) => {
  if (!isOpen) return null;

  return (
    <div>
      <label>Background:</label>
      <Input />
    </div>
  );
};

export default Toolbar;
