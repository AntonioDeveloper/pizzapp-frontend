import React, {useState, useEffect, useContext, createContext } from 'react';
import * as api from '../api/apiService';

const PizzaContext = createContext();

export default function PizzaProvider({children}){
  const [order, setOrder] = useState([]);
  const [statuses, setStatus] = useState({});  
  const [newIds, setNewIds] = useState(0);
  let id = 0;

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

  useEffect(() => {
    const getClients = async () => {
      const clients = await api.getAllClients();
      const arrayId = clients.map(c => {
        c._id = id;
        id++;
        return c._id;
      });
        setNewIds(arrayId);                
    }
    getClients();
  }, [id]);

  console.log(newIds);


  return(
    <PizzaContext.Provider 
    value={{order, setOrder,
          statuses, setStatus,
        newIds, setNewIds}}
    >
      {children}
    </PizzaContext.Provider>
  );
}

export function useData(){
  const context = useContext(PizzaContext);
  if(!context) throw new Error('useData must be used within a Provider');
  const {order, setOrder,statuses, setStatus, newIds, setNewIds} = context;
  return {order, setOrder, statuses, setStatus, newIds, setNewIds};
}