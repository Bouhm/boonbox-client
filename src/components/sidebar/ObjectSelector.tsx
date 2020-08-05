import './ObjectSelector.css';

import React, { useState } from 'react';

import ObjectButton, { ObjectType, ObjectTypes } from './ObjectButton';

type ObjectSelectorProps = {
  handleAddNewObject(): void;
};

const ObjectSelector = ({ handleAddNewObject }: ObjectSelectorProps) => {
  const [selectedObjectType, setSelectedObjectType] = useState<ObjectType | null>(null);

  const handleClickObjectButton = (objType: ObjectType) => {
    setSelectedObjectType(objType);
  };

  const handleClickNewObject = () => {
    handleAddNewObject();
  };

  const renderObjectType = (type: string) => {
    return <ObjectButton key={type} type={type} handleButtonClick={handleClickObjectButton} />;
  };

  return (
    <div className="ObjectSelector">
      {ObjectTypes.map(renderObjectType)}
      <div onClick={handleClickNewObject}>+ New Object</div>
    </div>
  );
};

export default ObjectSelector;
