import React, { useState } from 'react';

const useForm = (initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value });
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {};

  return {
    formData,
    handleFormChange,
    handleFormSubmit,
  };
};

export default useForm;
