import React from 'react';
import {Link} from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import PersonaForm from '../../components/persona-form/persona-form.component';
import ProductoForm from '../../components/producto-form/producto-form.component';
import PedidoForm from '../../components/pedido-form/pedido-form.component';
import LineasPedido from '../forms/lineaPedido-form/lineaPedido-form';
import EmpleadoForm from '../../components/empleado-form/empleado-form.component';
import ReservacionForm from '../../components/reservacion-form/reservacion-form.component';
import './forms.styles.scss'

const Forms = () => (
    <div className="forms">
      <div className="options">
        <Link className='option' to='/forms/reservacion'>
          Reservacion
        </Link>
        <Link className='option' to='/forms/empleado'>
          empleado
        </Link>
        <Link className='option' to='/forms/producto'>
          producto
        </Link>
        <Link className='option' to='/forms/cliente'>
          cliente
        </Link>
      </div>
      <Switch>
        <Route exact path='/forms/lineaPedido' component={LineasPedido} />
        <Route exact path='/forms/empleado' component={EmpleadoForm} />
        <Route exact path='/forms/producto' component={ProductoForm} />
        <Route exact path='/forms/pedido' component={PedidoForm} />
        <Route exact path='/forms/cliente' component={PersonaForm} />
        <Route exact path='/forms/reservacion' component={ReservacionForm} />
      </Switch>
      
    </div>
);

export default Forms;