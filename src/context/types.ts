import { ReactNode } from "react";
import { IProducts } from "../models/IProduct";

export interface Props {
  itemsCar: IProducts[];
  addItemCar: (value: IProducts) => void;
  removeItem: (value: IProducts) => void;
  total: number;
  resetCar: () => void;
}

export interface IContextProvider {
  children: ReactNode
}