import React, {useState} from 'react';
import OrderList from './orderList';
import Pagination from './pagination';
import {useData} from '../../context/context';

export default function PageControl(){
const {order} = useData();
const [currentPage, setCurrentPage] = useState(1);
const [ordersPerPage] = useState(5);

console.log(typeof(ordersArr))
const indexOfLastOrder = currentPage * ordersPerPage;
const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
const currentOrders = order.slice(indexOfFirstOrder, indexOfLastOrder);

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

