import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './correo-form.styles.scss';

class CorreoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      codigo: '',
      correo: '',
      tipo: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {codigo, correo, tipo} = this.state;

    await fetch('http://localhost:9000/correo', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          codigo: codigo,
          correo: correo,
          tipo: tipo
      })
    })
    .then(this.setState({
      codigo: '',
      correo: '',
      tipo: ''
    }))
  }; 

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='correo-form'>
        <h2> Formulario de Correo electrónico </h2>

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
            name='correo'
            type='email'
            handleChange={this.handleChange}
            value={this.state.correo}
            label='Correo electrónico'
            required
          />
          <FormInput
            name='tipo'
            type='text'
            handleChange={this.handleChange}
            value={this.state.tipo}
            label='Uso del correo electrónico'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Registrar correo </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default CorreoForm;
