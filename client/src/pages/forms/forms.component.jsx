import React from 'react';
import PersonaForm from '../../components/persona-form/persona-form.component';
import TelefonoForm from '../../components/telefono-form/telefono-form.component';
import CorreoForm from '../../components/correo-form/correo-form.component';

import './forms.styles.scss'

const Forms = () => (
    <div className="forms">
      <PersonaForm />
      <TelefonoForm />
      <CorreoForm />
    </div>
);

export default Forms;