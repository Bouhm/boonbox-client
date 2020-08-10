import React from 'react';
import useForm from '../../form/useForm';
import { DiceIcon } from '../../Icons';
import { rollDice, DiceSides } from './DiceUtil';

const Dices = () => {
  const medianCheckboxName = 'useMedian';
  const { formData, handleInputChange } = useForm({ [medianCheckboxName]: true });

  const handleClickDice = (e: React.MouseEvent) => {
    console.log(rollDice(parseInt(e.currentTarget.getAttribute('data-sides')!)));
  };

  const renderDiceButton = (sides: number) => {
    return (
      <div key={`dice-${sides}`} data-sides={sides} onClick={handleClickDice}>
        <DiceIcon sides={sides} />
      </div>
    );
  };

  return <div className="Dices">{DiceSides.map(renderDiceButton)}</div>;
};

export default Dices;
