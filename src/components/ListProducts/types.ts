interface Data {
  name: string;
  id: string;
  banner: string;
  price: number;
}

export interface Props {
  data: Data
  setProductCar: (value: Data) => void;
  viewProductCar: () => void;
}
