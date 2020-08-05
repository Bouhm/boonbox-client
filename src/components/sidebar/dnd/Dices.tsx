import React from 'react';
import useForm from '../../form/useForm';

const Dices = () => {
  const diceRadioName = 'dice';
  const medianCheckboxName = 'useMedian';
  const { formData, handleInputChange } = useForm({ [diceRadioName]: '', [medianCheckboxName]: true });

  const renderDiceOptions = () => {
    return <div></div>;
  };

  return <div className="Dices">{renderDiceOptions()}</div>;
};

export default Dices;
