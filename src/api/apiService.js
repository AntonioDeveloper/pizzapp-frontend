import axios from 'axios';

const API_URL_CLIENT = 'http://localhost:3001/client/';
const API_URL_ORDER = 'http://localhost:3001/order/';
const API_URL_STATUSES = 'http://localhost:3001/status/';

async function getAllClients(){
  const res = await axios.get(`${API_URL_CLIENT}clients`);
  //console.log(res.data);  
  return res.data;
};

async function getAllOrders(){
  const res = await axios.get(`${API_URL_ORDER}orders`);  
  return res.data;
};

async function submitClient({ values }){  
  console.log(values)
  await axios.post(`${API_URL_CLIENT}cadastrarcli`, values);
  const res = await axios.get(`${API_URL_CLIENT}clients`);
  return res.data;
};

async function submitOrder({ values }){
  console.log(values)
  await axios.post(`${API_URL_ORDER}cadastrarped`, values);
  const res = await axios.get(`${API_URL_ORDER}orders`);
  return res.data.orders;
}

async function updateOrderStatus(item){ 
  const id = item._id;
  /* console.log(id); */
  console.log(item); 
  await axios.put(`${API_URL_ORDER}update/${id}`, {item});
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
  const res = await axios.get(`${API_URL_STATUSES}`);
  return res.data;
}

export {getAllClients, getAllOrders, submitClient, submitOrder, updateOrderStatus, searchBar, getOrderStatuses};


