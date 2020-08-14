import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Forms from './pages/forms/forms.component';
import Header from './components/header/header.component';
import Pedidos from './pages/pedidos/pedidos.component';
import CorteForm from './components/corte-form/corte-form.component';



import './App.css';


class App extends React.Component {
  constructor() {
      super();
  
      this.state = {
        sucursal: 1
      };
  }
  render(){
    return (
      <div className="App">
        <Header/>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/forms' component={Forms} />
          <Route exact path='/pedidos' component={Pedidos} />
          <Route exact path='/corte' component={CorteForm} />
        </Switch>
        {}
      </div>
    )
  }
}




export default App;
