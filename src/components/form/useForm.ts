import React, { useState } from 'react'

const useInput = (initialValue = {}) => {
  const [formData, setFormData] = useState(initialValue)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.currentTarget.name]: e.currentTarget.value })
  }

  return {
    formData,
    handleInputChange
  }
}

export default useInput
