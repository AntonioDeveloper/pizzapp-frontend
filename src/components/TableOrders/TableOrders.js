import React from 'react';
import PageControl from '../Pagination/ordersView';
import {useData} from '../../context/context';


export default function TabelaPedidos() {

  const {order} = useData(); 

  return (
    <PageControl order={order} />   
  )
}
