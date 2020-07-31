import React, { useState, MouseEvent } from 'react';
import ObjectButton, { ObjectTypes, ObjectType } from './ObjectButton';

type ObjectSelectorProps = {
  handleAddNewObject(): void;
};

const ObjectSelector = ({ handleAddNewObject }: ObjectSelectorProps) => {
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
