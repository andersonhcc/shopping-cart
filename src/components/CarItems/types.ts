import { IProducts } from '../../context'

export interface Props {
  data: IProducts
  addAmount: () => void;
  removeItem: () => void;
}
