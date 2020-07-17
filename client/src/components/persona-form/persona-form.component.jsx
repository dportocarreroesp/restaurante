import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './persona-form.styles.scss';

class PersonaForm extends React.Component {
  constructor() {
    super();

    this.state = {
      nombres: '',
      apellidos: '',
      fecha_nacimiento: '',
      domicilio: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {nombres, apellidos, fecha_nacimiento, domicilio} = this.state;

    await fetch('http://localhost:9000/persona', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          nombres: nombres,
          apellidos: apellidos,
          fecha_nacimiento: fecha_nacimiento,
          domicilio: domicilio
      })
    })
    .then(this.setState({
      nombres: '',
      apellidos: '',
      fecha_nacimiento: '',
      domicilio: ''
    }))
  }; 

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='persona-form'>
        <h2> Formulario de Persona </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='nombres'
            type='text'
            handleChange={this.handleChange}
            value={this.state.nombres}
            label='Nombres'
            required
          />
          <FormInput
            name='apellidos'
            type='text'
            handleChange={this.handleChange}
            value={this.state.apellidos}
            label='Apellidos'
            required
          />
          <FormInput
            name='fecha_nacimiento'
            type='date'
            handleChange={this.handleChange}
            value={this.state.fecha_nacimiento}
            required
          />
          <FormInput
            name='domicilio'
            type='text'
            handleChange={this.handleChange}
            value={this.state.domicilio}
            label='Lugar de su domicilio'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Registrar persona </CustomButton>
          </div>
        </form>
      </div>
    );
  }//Sign in es props.children
}

export default PersonaForm;
