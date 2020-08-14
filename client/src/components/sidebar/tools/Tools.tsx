import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addPiece } from '../../../store/board/actions';
import Input from '../../form/Input';
import useForm from '../../form/useForm';
import ObjectSelector from './ObjectSelector';

type Props = ConnectedProps<typeof connector>;

const Tools = ({ addPiece }: Props) => {
  const bgInputName = 'background';
  const objValName = 'value';
  const { formData, handleInputChange } = useForm({ [bgInputName]: '', [objValName]: '' });

  const handleAddNewObject = () => {
    addPiece({
      key:
        '_' +
        Math.random()
          .toString(36)
          .substr(2, 9),
      data: formData[objValName],
      type: 'text',
    });
  };

  return (
    <div className="Tools">
      <Input name={bgInputName} value={formData[bgInputName]} onChange={handleInputChange} />
      <ObjectSelector handleAddNewObject={handleAddNewObject} />
      <Input name={objValName} value={formData[objValName]} onChange={handleInputChange} />
    </div>
  );
};

const connector = connect(undefined, { addPiece });

export default connector(Tools);
