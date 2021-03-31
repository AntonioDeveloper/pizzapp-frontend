import React, {useState, useEffect, useContext, createContext } from 'react';
import * as api from '../api/apiService';

const PizzaContext = createContext();

export default function PizzaProvider({children}){
  const [order, setOrder] = useState({});
  const [statuses, setStatus] = useState({});

  useEffect(() => {
      const getOrders = async () => {
      const orders = await api.getAllOrders();
      setOrder(orders);      
    }    
    getOrders();
  }, []);
  
  useEffect(() => {
    const getStatuses = async () => {
    const status = await api.getOrderStatuses();
    setStatus(status);
    }
    getStatuses();
  }, []);

  //console.log(statuses)

  return(
    <PizzaContext.Provider 
    value={{order, setOrder,
          statuses, setStatus}}
    >
      {children}
    </PizzaContext.Provider>
  );
}

export function useData(){
  const context = useContext(PizzaContext);
  if(!context) throw new Error('useData must be used within a Provider');
  const {order, setOrder,statuses, setStatus} = context;
  return {order, setOrder, statuses, setStatus};
}