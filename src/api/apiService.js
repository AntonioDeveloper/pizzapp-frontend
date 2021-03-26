import axios from 'axios';

const API_URL_CLIENT = 'http://localhost:3001/client/';
const API_URL_ORDER = 'http://localhost:3001/order/';

async function getAllClients(){
  const res = await axios.get(`${API_URL_CLIENT}clients`);
  //console.log(res.data);  
  return res.data;
};

async function getAllOrders(){
  const res = await axios.get(`${API_URL_ORDER}orders`);
  //console.log(res.data); 
  return res.data;
};

async function submitClient({ values }){
  
  await axios.post(`${process.env.REACT_APP_API_URL}cadastrarcli`, values);
  const res = await axios.get(`${process.env.REACT_APP_API_URL}clients`);
  return res.data.clients;
};

async function submitOrder({ values }){
  await axios.post(`${process.env.REACT_APP_API_URL}cadastrarped`, values);
  const res = await axios.get(`${process.env.REACT_APP_API_URL}orders`);
  return res.data.orders;
}

async function updateOrderStatus(status, id, statuses){ 
  await axios.put(`${process.env.REACT_APP_API_URL}novostatus/${id}`, {status, statuses});
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

export {getAllClients, getAllOrders, submitClient, submitOrder, updateOrderStatus, searchBar};


