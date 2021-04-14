import React, { useState, useEffect } from 'react';
import PageDefault from '../components/PageDefault/PageDefault';
import useForm from '../hooks/useForm';
import * as api from '../api/apiService';
import Tabela from '../components/TableClients/TableClients';
import { Container } from 'react-bootstrap';

export default function CadastroClientes() {

  const valoresIniciais = {
    id: '',
    name: '',
    tel: '',    
    address: ''  
  }

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [allClients, setAllClients] = useState([]);

  useEffect(() => {
    const getClients = async () => {
      const clients = await api.getAllClients();
      setAllClients(clients);
    };

    getClients();

  }, []);
  
  return (
    <Container>
      <PageDefault>
        <h2>Cadastro de Clientes</h2>
        <form align="center" onSubmit={function handleSubmit(infosDoEvento) {
          console.log(values);
          const pattName = /([^A-z\s])/g;    
         
          if(values.name.match(pattName) || values.name === "" || values.tel ==="" || values.address === ""){
            alert("Números, caracteres especiais e sem preenchimento não são permitidos aqui");
              return;
          } else {
            infosDoEvento.preventDefault();
            setAllClients([
              ...allClients,
              values
            ]);
            api.submitClient({ values });
            clearForm();            
          }        
        }} >

          <input label="Nome do Cliente"
            type="text"
            name="name"
            placeholder="Nome do Cliente"
            value={values.name}
            onChange={handleChange} />
            &nbsp;

          <input label="Telefone"
            type="tel"
            name="tel"
            placeholder="(DDD) 99999-9999"
            pattern="[0-9]{2} [0-9]{5}-[0-9]{4}"
            value={values.tel}
            onChange={handleChange} />        
            &nbsp;

          <input label="Endereço"
            type="text"
            name="address"
            placeholder="Endereço residencial"
            value={values.address}
            onChange={handleChange} />
            &nbsp;

          <input type="submit" value="Cadastrar" />

        </form>

        <Tabela allClients={allClients} className="container" />
      </PageDefault>
    </Container>
  )
}
