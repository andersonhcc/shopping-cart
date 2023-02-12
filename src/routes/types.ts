import { IProducts } from "../context";


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