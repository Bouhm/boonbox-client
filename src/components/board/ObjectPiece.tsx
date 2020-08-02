import { ObjectType } from "../toolbar/ObjectButton";

export type Position = {
  x: number;
  y: number;
};

export interface IObjectPiece {
  type: ObjectType;
  data: string;
  position?: Position;
}
