import { ObjectType } from '../sidebar/tools/ObjectButton';

export type Position = {
  x: number;
  y: number;
};

export interface IObjectPiece {
  key: string;
  type: ObjectType;
  data: string;
  position?: Position;
}
