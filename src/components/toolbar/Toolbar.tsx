import "./Toolbar.css";

import React, { useState } from "react";
import { connect } from "react-redux";

import { addPiece, toggleToolbar } from "../../store/actions";
import { AppState } from "../App";
import Input from "../form/Input";
import ObjectSelector from "./ObjectSelector";

export type ToolbarProps = {
  isOpen?: boolean;
};

const Toolbar = ({ isOpen = true }: ToolbarProps) => {
  if (!isOpen) return null;

  const handleAddNewObject = () => {
    addPiece({ data: 'HELLO', type: 'text' });
  };

  return (
    <div className="Toolbar">
      <label>Background:</label>
      <Input />
      <ObjectSelector handleAddNewObject={handleAddNewObject} />
    </div>
  );
};

const mapStateToProps = (state: AppState) => {
  return {
    toolbar: state.toolbar,
  };
};

export default connect(mapStateToProps, { addPiece, toggleToolbar })(Toolbar);
