import { IProducts } from "../models/IProduct";


export type StackPramsList = {
  Home: undefined;
  MyProducts: {
    item: IProducts[]
  };
  Finish: undefined;
  InfoProduct: {
    item: IProducts
  }
};