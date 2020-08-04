import React, { useState } from 'react';

const useForm = (initialState = {}) => {
  const [formData, setFormData] = useState<{ [name: string]: string }>(initialState);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  return {
    formData,
    handleInputChange,
  };
};

export default useForm;
