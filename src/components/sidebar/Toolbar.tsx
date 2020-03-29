import React, { useState } from 'react';

import Input from '../form/Input';

type ToolbarProps = {};

const Toolbar = (props: any) => {
  return (
    <div>
      <label>Background:</label>
      <Input />
    </div>
  );
};

export default Toolbar;
