import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './correo-edit.styles.scss';

class CorreoEdit extends React.Component {
  constructor(query) {
    super();

    this.state = {
      codigo: query.location.query.row.persona_codigo,
      correo: query.location.query.row.correo,
      tipo: query.location.query.row.tipo
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {correo, tipo} = this.state;

    await fetch('http://localhost:9000/correo/'+this.state.codigo, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          correo: correo,
          tipo: tipo
      })
    })
    .then(this.setState({
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
      <div className='correo-edit'>
        <h2> Editar Correo electrónico </h2>

        <form onSubmit={this.handleSubmit}>
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
            <CustomButton type='submit'> Editar correo </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default CorreoEdit;
