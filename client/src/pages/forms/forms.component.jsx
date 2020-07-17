import React from 'react';
import PersonaForm from '../../components/persona-form/persona-form.component';
import EmpleadoForm from '../../components/empleado-form/empleado-form.component';
import ProductoForm from '../../components/producto-form/producto-form.component';
import PedidoForm from '../../components/pedido-form/pedido-form.component';
import './forms.styles.scss'

const Forms = () => (
    <div className="forms">
      <PersonaForm />
      <EmpleadoForm />
      <PedidoForm />
    </div>
);

export default Forms;