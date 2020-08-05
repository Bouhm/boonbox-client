import React, { useState } from 'react';

export type Value = any;

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState<{ [name: string]: Value }>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  return {
    formData,
    handleInputChange,
  };
};

export default useForm;
