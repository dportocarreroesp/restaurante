import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './telefono-form.styles.scss';

class TelefonoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      codigo: '',
      numero: '',
      tipo: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {codigo,numero, tipo} = this.state;

    await fetch('http://localhost:9000/telefono', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          codigo: codigo,
          numero: numero,
          tipo: tipo
      })
    })
    .then(this.setState({
      codigo: '',
      numero: '',
      tipo: ''
    }))
  }; 

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='telefono-form'>
        <h2> Formulario de Teléfono </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='codigo'
            type='number'
            handleChange={this.handleChange}
            value={this.state.codigo}
            label='Código'
            required
          />
          <FormInput
            name='numero'
            type='text'
            handleChange={this.handleChange}
            value={this.state.numero}
            label='Número(máx. 9 dígitos)'
            required
          />
          <FormInput
            name='tipo'
            type='text'
            handleChange={this.handleChange}
            value={this.state.tipo}
            label='Uso del teléfono'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Registrar teléfono </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default TelefonoForm;
