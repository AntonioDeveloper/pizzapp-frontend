import axios from 'axios';
require('dotenv').config();

const API_CLIENTS = 'process.env.REACT_APP_API_URL_CLIENT';
const API_ORDERS = 'http://localhost:3001/client/';
const API_STATUSES = 'process.env.REACT_APP_API_URL_STATUSES';

async function getAllClients(){
  const res = await axios.get(`${API_CLIENTS}clients`);
  //console.log(res.data);  
  return res.data;
};

async function getAllOrders(){
  const res = await axios.get(`${API_ORDERS}orders`);  
  return res.data;
};

async function submitClient({ values }){  
  console.log(values)
  await axios.post(`${API_CLIENTS}cadastrarcli`, values);
  const res = await axios.get(`${API_CLIENTS}clients`);
  return res.data;
};

async function submitOrder({ values }){
  console.log(values)
  await axios.post(`${API_ORDERS}cadastrarped`, values);
  const res = await axios.get(`${API_ORDERS}orders`);
  return res.data.orders;
}

async function updateOrderStatus(item){ 
  const id = item._id;
  /* console.log(id); */
  console.log(item); 
  await axios.put(`${API_ORDERS}update/${id}`, {item});
}

async function searchBar(values){
  const {type, value} = values;
  if(type === 'id'){    
    const res = await axios.get(`${process.env.REACT_APP_API_URL}orders/${type}/${value}`);
    console.log(res.data);
    return res.data;
  } else {   
    const res = await axios.get(`${process.env.REACT_APP_API_URL}orders/${type}/${value}`);
    console.log(res.data);
  }
  //await axios.get(`${process.env.REACT_APP_API_URL}${values}`, values);
}

async function getOrderStatuses(){
  const res = await axios.get(`${API_STATUSES}`);
  return res.data;
}

export {getAllClients, getAllOrders, submitClient, submitOrder, updateOrderStatus, searchBar, getOrderStatuses};


