import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import logo from '../../img/logo.png';
import './Menu.css';

function Menu() {
  return (

    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/"><img src={logo} alt="logo" width="200"/></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/cadastro/clientes">Clientes</Nav.Link>
          <Nav.Link href="/cadastro/pedidos">Pedidos</Nav.Link>
          <Nav.Link href="/admin-pedidos">Acompanhar Pedidos</Nav.Link>         
        </Nav>  
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu; 