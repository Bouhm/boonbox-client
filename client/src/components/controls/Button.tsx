import React from 'react';
import './controls.css';

export type ButtonProps = {
  icon: React.ReactNode;
  text: string;
  onClick(): void;
};

const Button = ({ icon, text, onClick }: ButtonProps) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="button" onClick={handleClick}>
      {icon}
      {text}
    </div>
  );
};

export default Button;
