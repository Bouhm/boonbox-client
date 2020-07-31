import React from "react";

export const ObjectTypes = ["text", "image"] as const;
export type ObjectType = typeof ObjectTypes[number];

export interface IObjectButtonProps {
  type: string;
  handleButtonClick(type: string): void;
};

const ObjectButton = ({type, handleButtonClick}: IObjectButtonProps) => {
    const handleClick = () => {
        handleButtonClick(type as ObjectType);
    }

    return (
        <div onClick={handleClick} />
    )
}

export default ObjectButton;