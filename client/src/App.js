import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './pages/homepage/homepage.component';
import Forms from './pages/forms/forms.component';
import PersonaEdit from './components/persona-edit/persona-edit.component';
import CorreoEdit from './components/correo-edit/correo-edit.component';
import TelefonoEdit from './components/telefono-edit/telefono-edit.component';
import Header from './components/header/header.component';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/forms' component={Forms} />
        <Route exact path='/editPersona' component={PersonaEdit} />
        <Route exact path='/editCorreo' component={CorreoEdit} />
        <Route exact path='/editTelefono' component={TelefonoEdit} />
      </Switch>
    </div>
  )
};

export default App;
