import React from 'react';
import TabelaPedidos from './components/TableOrders/TableOrders';
import { Container } from 'react-bootstrap';
import PageDefault from './components/PageDefault/PageDefault';
import PizzaProvider from './context/context';

export default function App() {
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

