import React from 'react';
import styled from 'styled-components';

import useInput from '../form/useInput';

const StyledInput = styled.input``;

const Input = (props: any) => {
  const { inputVal, handleInputChange } = useInput();

  return <StyledInput value={inputVal} onChange={handleInputChange} />;
};

export default Input;
