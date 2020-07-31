import React, { useState, MouseEvent } from 'react';
import ObjectButton, { ObjectTypes, ObjectType } from './ObjectButton';

interface IObjectSelectorProps {
  handleAddNewObject(): void;
};

interface IObjectSelectorState {
  selectedObjectType: ObjectType | null;
}

const ObjectSelector = ({ handleAddNewObject }: IObjectSelectorProps) => {
  const [selectedObjectType, setSelectedObjectType] = useState<ObjectType | null>(null);

  const handleClickObjectButton = (objType: ObjectType) => {
    setSelectedObjectType(objType)
  }

  const handleClickNewObject = () => {
    handleAddNewObject();
  }

  const renderObjectType = (type: string) => {
    return <ObjectButton type={type} handleButtonClick={handleClickObjectButton} />
  }

  return (
    <div>
      {Object.keys(ObjectTypes).map(renderObjectType)}
      <div onClick={handleClickNewObject}>+ New Object</div>
    </div>
  );
};

export default ObjectSelector;
