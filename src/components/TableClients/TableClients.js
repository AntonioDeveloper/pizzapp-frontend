import React from 'react';
import { Table } from 'react-bootstrap';


export default function Tabela({ allClients }) {
let newId = 0;

  return (
    <Table striped responsive>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nome Completo</th>
          <th>Telefone</th>         
          <th>Endereço</th>
        </tr>
      </thead>
      <tbody>
        {allClients.map((client, index) => {
          client._id = newId;
          newId++;
          return (
            <tr key={index}>
              <th scope="row">{client._id}</th>
              <td>{client.name}</td>
              <td>{client.tel}</td>         
              <td>{client.address}</td>
            </tr>
          );
        })
        }
      </tbody>
    </Table>
  )
}
