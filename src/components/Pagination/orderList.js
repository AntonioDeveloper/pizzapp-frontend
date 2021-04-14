import React from 'react';
import { Table } from 'react-bootstrap';


export default function OrderList({orders}){

 /*  let i = 0;
  orders.map(order => {
    order._id = i;    
    i++;
    return i;
     });  */
     //console.log(orders);
  return(
    <Table striped responsive>
      <thead>
        <tr>
          <th>Pedido</th>
          <th>inteira-MeioMeio</th>
          <th>massaFina-Grossa</th>
          <th>molhoExtra</th>
          <th>sabor</th>
          <th>Endereço de Entrega</th>
          <th>observacoes</th>
          <th>Id Cliente</th>
        </tr>
      </thead>
      <tbody>
        {        
        orders.map((order, index) => {          
          return (
            <tr key={index}>
              <th scope="row">{order._id}</th>
              <td>{order.split}</td>
              <td>{order.dough}</td>
              <td>{order.extraSauce}</td>
              <td>{order.pizza}</td>
              <td>{order.delivery_address}</td>
              <td>{order.message}</td>
              <td>{order.idClient}</td>
            </tr>
          );
        })
        } 
      </tbody>

    </Table>
  )
}