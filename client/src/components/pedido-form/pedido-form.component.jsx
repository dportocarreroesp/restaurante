import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import './pedido-form.styles.scss';

class PedidoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      fecha: '',
      hora: '',
      correoEmpleado: '',
      correoPersona: '',
      id_Mesa: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const {fecha, hora, correoEmpleado, correoPersona} = this.state
    var today = new Date()
    await this.setState({
      fecha: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      hora: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    })
    console.log(this.state)
    var id_Sucursal = this.props.currentUser.sucursal;
    fetch('http://localhost:9000/pedido/'+id_Sucursal, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fecha: fecha,
        hora: hora,
        correoEmpleado: correoEmpleado,
        correoPersona: correoPersona
      })
    })
    .then(this.setState({
        fecha: '',
        hora: '',
        id_Mesa: 0,
        correoEmpleado: '',
        correoPersona: ''
    }))
  }; 

  handleChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='pedido-form'>
        <h2> Formulario de Pedido </h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='correoEmpleado'
            type='text'
            handleChange={this.handleChange}
            value={this.state.correoEmpleado}
            label='Dirección de correo electrónico del empleado'
            required
          />
          <FormInput
            name='correoPersona'
            type='text'
            handleChange={this.handleChange}
            value={this.state.correoPersona}
            label='Dirección de correo electrónico del cliente'
            required
          />
          <FormInput
            name='id_Mesa'
            type='number'
            handleChange={this.handleChange}
            value={this.state.id_Mesa}
            label='Número de mesa'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Registrar Pedido </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(PedidoForm);

