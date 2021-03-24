import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import CadastroClientes from './pages/clientes';
import CadastroPedidos from './pages/pedidos';
import AdmPedidos from './components/Trello/admPedidos';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/cadastro/clientes" component={CadastroClientes} exact />
      <Route path="/cadastro/pedidos" component={CadastroPedidos} exact />
      <Route path="/admin-pedidos" component={AdmPedidos} exact />
    </Switch>
  </BrowserRouter>,
  document.getElementById('app')
);

