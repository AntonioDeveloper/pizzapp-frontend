import React, { useState, useEffect } from 'react';
//import {useData} from './context/context';
//import * as api from './api/apiService';
import TabelaPedidos from './components/TableOrders/TableOrders';
import { Container } from 'react-bootstrap';
import PageDefault from './components/PageDefault/PageDefault';
import PizzaProvider from './context/context';

export default function App() {

  //const {order} = useData();

  /* const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {   

    const getOrders = async () => {
      const orders = await api.getAllOrders();
      setAllOrders(orders);
    };
    
    getOrders();
  }, []); */

//console.log(order)

  return (
    <PizzaProvider>
      <Container>
        <PageDefault>          
          <TabelaPedidos className="container" />    
        </PageDefault>
      </Container>
    </PizzaProvider>
  )
};

