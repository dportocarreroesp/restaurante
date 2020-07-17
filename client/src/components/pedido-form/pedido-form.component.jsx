import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormSelect from '../form-select/form-select.component';
import LineaPedidoForm from '../lineaPedido-form/lineaPedido-form.component';

import './pedido-form.styles.scss';

class PedidoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      fecha: '',
      hora: '',
      id_Empleado: '',
      id_Persona: '',
      id_Mesa: '',
      id_Sucursal_Mesa: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    var today = new Date()
    await this.setState({
      fecha: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      hora: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    })
    console.log(this.state)
  }; 

  handleChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
    console.log(this.state)
  };

  render() {
    return (
      <div className='pedido-form'>
        <h2> Formulario de Pedido </h2>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='id_Empleado'
            type='text'
            handleChange={this.handleChange}
            value={this.state.id_Empleado}
            label='ID del empleado'
            required
          />
          <FormInput
            name='id_Persona'
            type='text'
            handleChange={this.handleChange}
            value={this.state.id_Persona}
            label='ID del cliente'
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
          <FormSelect
            name = 'id_Sucursal_Mesa'
            type = 'number'
            handleChange = {this.handleChange}
            options = {[
                {
                    value: 1, label:'Sucursal 1'
                },
                {
                    value: 2, label:'Sucursal 2'
                },
                {
                    value: 3, label:'Sucursal 3'
                },
                {
                    value: 4, label:'Sucursal 4'
                }
            ]}
            label = 'Sucursal'
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

export default PedidoForm;
