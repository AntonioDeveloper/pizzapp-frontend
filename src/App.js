import React, { useState, useEffect } from 'react';
import * as api from './api/apiService';
import TabelaPedidos from './components/TableOrders/TableOrders';
import { Container } from 'react-bootstrap';
import PageDefault from './components/PageDefault/PageDefault';
import PizzaProvider from './context/context';

export default function App() {


  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
   

    const getOrders = async () => {
      const orders = await api.getAllOrders();
      setAllOrders(orders);
    };
    
    getOrders();
  }, []);

/* console.log(allOrders) */

  return (
    <PizzaProvider>
      <Container>
        <PageDefault>          
          <TabelaPedidos allOrders={allOrders} className="container" />    
        </PageDefault>
      </Container>
    </PizzaProvider>
  )
};

