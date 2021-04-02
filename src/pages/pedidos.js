import React, { useState, useEffect } from 'react';
import PageDefault from '../components/PageDefault/PageDefault';
import useForm from '../hooks/useForm';
import * as api from '../api/apiService';
import Tabela from '../components/TableOrders/TableOrders';
import { Container, Form } from 'react-bootstrap';
//import Calendario from '../components/Calendario/Calendario';
import PizzaProvider from '../context/context'
import '../App.css';


export default function CadastroPedidos() {

  const valoresIniciais = {
    status: "aberto",
    icon: "⭕️",
    split: true,
    dough: "Fina",
    extraSauce: true,
    pizza: 'Muzzarela',
    delivery_address: '',
    message: '',
    clientId: ''
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
 
  const [allOrders, setAllOrders] = useState([]);

  useEffect(() => {
    const getAllOrders = async () => {
      const orders = await api.getAllOrders();
      setAllOrders(orders);
    };

    getAllOrders();

  }, []);

//console.log(allOrders)

  return (
    <PizzaProvider>
    <Container>
      <PageDefault>
        <h2>Cadastro de Pedidos</h2>
        <Form align="center" onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setAllOrders([
            ...allOrders,
            values
          ]);
          api.submitOrder({ values });
          clearForm()
          //console.log(values);          
        }} >

          {/* Radio Buttons para escolher pizza inteira ou meio-a-meio */}

          <Form.Group controlId="opcoes1">
            <Form.Label className="form_label">Pizza de 1 sabor ou meio-a-meio</Form.Label>
            <Form.Control value={values.split} as="select" name="split" onChange={handleChange}>
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="opcoes2">
            <Form.Label>{"Molho extra?"}</Form.Label>
            <Form.Control value={values.extraSauce} as="select" name="extraSauce" onChange={handleChange}>
              <option value="Não">Não</option>
              <option value="Sim">Sim</option>
            </Form.Control>
          </Form.Group>

          <Form.Group controlId="sabores">
            <Form.Label>{"Escolha até 2 sabores para a pizza meio-a-meio"}</Form.Label>
            <Form.Control value={values.pizza} as="select" name="pizza" onChange={handleChange}>
              <option value="Muzzarela">Muzzarela</option>
              <option value="Margerita">Margerita</option>
              <option value="4 Queijos">4 Queijos</option>
              <option value="Berinjela">Berinjela</option>
              <option value="Brigadeiro">Brigadeiro</option>
              <option value="Beijinho">Beijinho</option>
            </Form.Control>
          </Form.Group> 

         {/*  <Calendario name="agenda" /> */}
          
          <input label="Endereço de Entrega"
            type="text"
            name="delivery_address"
            placeholder="Endereço de Entrega"
            value={values.delivery_address}
            onChange={handleChange} />


          <Form.Group controlId="observacoes">
            <Form.Label>Observações do Pedido</Form.Label>
            <Form.Control as="textarea" rows="3" name="message" value={values.message}
              onChange={handleChange} />
          </Form.Group>

          <input label="CPF"
            type="text"
            name="clientId"
            placeholder="Cliente"
            value={values.clientId}
            onChange={handleChange} />

          <input type="submit" value="Cadastrar" />

        </Form>

        <Tabela allOrders={allOrders} className="container" />
      </PageDefault>
    </Container>
    </PizzaProvider>
  )
}
