import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './telefono-edit.styles.scss';

class TelefonoEdit extends React.Component {
  constructor(query) {
    super();
    
    this.state = {
      codigo: query.location.query.row.persona_codigo,
      numero: query.location.query.row.telefono_numero,
      tipo: query.location.query.row.tipo
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {tipo} = this.state;

    await fetch('http://localhost:9000/telefono/'+this.state.codigo+'&'+this.state.numero, {
      method: 'PUT',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          tipo: tipo
      })
    })
    .then(this.setState({
      tipo: ''
    }))
  }; 

  handleChange = event => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='telefono-edit'>
        <h2> Editar Teléfono </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='tipo'
            type='text'
            handleChange={this.handleChange}
            value={this.state.tipo}
            label='Uso del teléfono'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Editar teléfono </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default TelefonoEdit;
