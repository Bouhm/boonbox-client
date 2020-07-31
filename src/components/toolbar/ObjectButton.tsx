import React from "react";

export const ObjectTypes = ["text", "image"] as const;
export type ObjectType = typeof ObjectTypes[number];

export type ObjectButtonProps = {
    type: string;
    handleButtonClick(type: string): void;
};

const ObjectButton = ({ type, handleButtonClick }: ObjectButtonProps) => {
    const handleClick = () => {
        handleButtonClick(type as ObjectType);
    }

    return (
        <div className="ObjectButton" onClick={handleClick}>
            {type}
        </div>
    )
}

export default ObjectButton;