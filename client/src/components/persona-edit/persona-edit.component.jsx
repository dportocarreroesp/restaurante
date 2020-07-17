import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './persona-edit.styles.scss';

class PersonaEdit extends React.Component {
  constructor(query) {
    super();
    console.log(query.location.query.row)
    this.state = {
      codigo: query.location.query.row.codigo,
      nombres: query.location.query.row.nombres,
      apellidos: query.location.query.row.apellidos,
      fecha_nacimiento: query.location.query.row.fecha_nacimiento.slice(0,10),
      domicilio: query.location.query.row.domicilio
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {nombres, apellidos, fecha_nacimiento, domicilio} = this.state;

    await fetch('http://localhost:9000/persona/'+this.state.codigo, {
      method: 'PUT',
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
      <div className='persona-edit'>
        <h2> Editar datos de de Persona </h2>

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
            <CustomButton type='submit'> Editar persona </CustomButton>
          </div>
        </form>
      </div>
    );
  }//Sign in es props.children
}

export default PersonaEdit;
