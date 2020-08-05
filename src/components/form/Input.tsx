import React, { ChangeEvent } from 'react';
import { Value } from './useForm';

type InputProps = {
  name: string;
  value: Value;
  label?: string;
  onChange(e: ChangeEvent<HTMLInputElement>): void;
};

const Input = ({ label, name, onChange, value }: InputProps) => {
  return (
    <>
      <label>{label ? label : name.slice(0, 1).toUpperCase() + name.slice(1, name.length)}</label>
      <input name={name} value={value} onChange={onChange} />
    </>
  );
};

export default Input;
