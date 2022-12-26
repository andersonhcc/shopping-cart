import React, { useContext, createContext, ReactNode, useState } from "react";


export interface IProducts {
  id: string;
  name: string;
  price: number;
  amount?: number;
  priceAll?: number;
  banner: string;
  description?: string;
}

interface Props {
  itemsCar: IProducts[];
  addItemCar: (value: IProducts) => void;
  removeItem: (value: IProducts) => void;
  total: number;
  resetCar: () => void;

}

interface IContextProvider {
  children: ReactNode
}

export const ContextAll = createContext({} as Props);


 function Context({ children }: IContextProvider) {
  const [itemsCar, setItemsCar] = useState<IProducts[]>([]);
  const [total, setTotal] = useState(0);

  function addItemCar(data: IProducts){
    const indexProduct = itemsCar.findIndex(item => item.id === data.id);
    
    if(indexProduct !== -1){
        let itemsList = itemsCar;
        
        itemsList[indexProduct].amount += 1;
        itemsList[indexProduct].priceAll = itemsList[indexProduct].amount * Number(itemsList[indexProduct].price);

        setItemsCar(itemsList);
        priceAllProducts(itemsList)
        return;
    }

    let infos = {
      ...data,
      amount: 1,
      priceAll: data.price,
    }

    setItemsCar([...itemsCar, infos]);
    priceAllProducts([...itemsCar, infos])

  }


  function removeItem(data: IProducts){
    const indexProduct = itemsCar.findIndex(item => item.id === data.id);

    if(itemsCar[indexProduct]?.amount > 1){
      let itemsList = itemsCar;
      
      itemsList[indexProduct].amount = itemsList[indexProduct].amount - 1;

      itemsList[indexProduct].priceAll =  itemsList[indexProduct].priceAll - Number(itemsList[indexProduct].price);

      setItemsCar(itemsList);
      priceAllProducts(itemsList);
      return;
    }

    const removeProduct = itemsCar.filter(item => item.id !== data.id);

    setItemsCar(removeProduct);
    priceAllProducts(removeProduct);

  }


  function priceAllProducts(items : IProducts[]){
    let myCart = items;
    let result = myCart.reduce((acc, obj) => {
      return acc + obj.priceAll
    },0);

    setTotal(result);
  }

  function resetCar(){
    
    setItemsCar([]);
    setTotal(0);
  }

  return (
    <ContextAll.Provider value={
      {
        itemsCar,
        addItemCar,
        removeItem,
        total,
        resetCar
      }
    }>
      {children}
    </ContextAll.Provider>
  )

} 

function useProducts(){
  const context = useContext(ContextAll);

  return context;
}

export { Context, useProducts }