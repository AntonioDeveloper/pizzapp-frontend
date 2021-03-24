import React, {useState} from 'react';
import {useData} from '../../context/context';
import OrderList from './orderList';
import Pagination from './pagination';

export default function PageControl(){
const {order} = useData();
const [currentPage, setCurrentPage] = useState(1);
const [ordersPerPage] = useState(5);

//Necessário para conseguir acessar as propriedades dos 
//objetos no array
const ordersArr = Array.from(order);

console.log(ordersArr)
const indexOfLastOrder = currentPage * ordersPerPage;
const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
const currentOrders = ordersArr.slice(indexOfFirstOrder, indexOfLastOrder);

// Change page
const paginate = (pageNumber) => setCurrentPage(pageNumber)

  return(
    <div>      
      <OrderList orders={currentOrders} />
      <Pagination totalOrders={order.length} ordersPerPage={ordersPerPage} 
      paginate={paginate}/>
    </div>
  );
}

