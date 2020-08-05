import React from 'react';
import { connect, ConnectedProps } from 'react-redux';

import { addPiece } from '../../../store/board/actions';
import { AppState } from '../../App';
import Input from '../../form/Input';
import ObjectSelector from './ObjectSelector';
import useForm from '../../form/useForm';

type Props = ConnectedProps<typeof connector>;

const Tools = ({ isOpen = true, addPiece }: Props) => {
  const bgInputName = 'background';
  const objValName = 'value';
  const { formData, handleInputChange } = useForm({ [bgInputName]: '', [objValName]: '' });

  const handleAddNewObject = () => {
    const key =
      '_' +
      Math.random()
        .toString(36)
        .substr(2, 9);

    addPiece({
      key,
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

const mapStateToProps = (state: AppState) => {
  return { ...state.sidebar };
};

const connector = connect(mapStateToProps, { addPiece });

export default connector(Tools);
