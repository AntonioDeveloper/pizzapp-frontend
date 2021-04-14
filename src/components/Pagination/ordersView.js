import React, {useState} from 'react';
import OrderList from './orderList';
import Pagination from './pagination';
import {useData} from '../../context/context';

export default function PageControl(){
const {order} = useData();
const [currentPage, setCurrentPage] = useState(1);
const [ordersPerPage] = useState(5);

//console.log(order)
const indexOfLastOrder = currentPage * ordersPerPage;
const indexOfFirstOrder = indexOfLastOrder - ordersPerPage;
const currentOrders = order.slice(indexOfFirstOrder, indexOfLastOrder);

//console.log(currentOrders);

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

