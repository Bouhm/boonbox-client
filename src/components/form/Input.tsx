import React from 'react';

import useInput from '../form/useInput';

const Input = (props: any) => {
  const { inputVal, handleInputChange } = useInput();

  return <input value={inputVal} onChange={handleInputChange} />;
};

export default Input;
