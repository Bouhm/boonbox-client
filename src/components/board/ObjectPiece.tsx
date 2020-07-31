import { ObjectType } from "../toolbar/ObjectButton";

export interface IObjectPiece {
  type: ObjectType;
  data: string;
  position: {
    x: number,
    y: number,
  }
};