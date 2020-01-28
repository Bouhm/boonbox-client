import React, { useState } from 'react';
import styled from 'styled-components';

import Input from '../form/Input';
import Label from '../form/Label';

type ToolbarProps = {};

const Toolbar = (props: any) => {
  return (
    <div>
      <Label>Background:</Label>
      <Input />
    </div>
  );
};

export default Toolbar;
