import React, { useContext, createContext, ReactNode, useState } from "react";


interface IProducts {
  id: string;
  name: string;
  price: string;
  amount: number;
}

interface Props {
  itemsCar: IProducts[];
  setItemsCar: (value: IProducts[]) => void;
}

interface IContextProvider {
  children: ReactNode
}

export const ContextAll = createContext({} as Props);


 function Context({ children }: IContextProvider) {
  const [itemsCar, setItemsCar] = useState<IProducts[]>([]);

  return (
    <ContextAll.Provider value={
      {
        itemsCar,
        setItemsCar,
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