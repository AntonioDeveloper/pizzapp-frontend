import React, {useState, useEffect, useContext, createContext } from 'react';
import * as api from '../api/apiService';

const PizzaContext = createContext();

export default function PizzaProvider({children}){
  const [order, setOrder] = useState({});

  useEffect(() => {
      const getOrders = async () => {
      const orders = await api.getAllOrders();
      //console.log(orders);
      setOrder(orders);      
    }
    
    getOrders();
  }, []);
  
  //console.log(order)

  return(
    <PizzaContext.Provider 
    value={{order, setOrder}}
    >
      {children}
    </PizzaContext.Provider>
  );
}

export function useData(){
  const context = useContext(PizzaContext);
  if(!context) throw new Error('useData must be used within a Provider');
  const {order, setOrder} = context;
  return {order, setOrder};
}