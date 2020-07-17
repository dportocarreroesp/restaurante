import React from 'react';
import FormInput from '../form-input/form-input.component';
import FormSelect from '../form-select/form-select.component';
import CustomButton from '../custom-button/custom-button.component';

import './persona-form.styles.scss';

class PersonaForm extends React.Component {
  constructor() {
    super();

    this.state = {
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      correoElectronico: '',
      //telefonos: [],
      //companias: [],
      telefono: '',
      compania: '',
      tipoDocumento: '',
      documento: ''
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

  handleChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
    console.log(this.state)
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
            name='apellidoPaterno'
            type='text'
            handleChange={this.handleChange}
            value={this.state.apellidoPaterno}
            label='Apellido Paterno'
            required
          />
          <FormInput
            name='apellidoMaterno'
            type='text'
            handleChange={this.handleChange}
            value={this.state.apellidoMaterno}
            label='Apellido Materno'
            required
          />
          <FormInput
            name='fechaNacimiento'
            type='date'
            handleChange={this.handleChange}
            value={this.state.fechaNacimiento}
            required
          />
          <FormSelect
            name='tipoDocumento'
            handleChange={this.handleChange}
            value={this.state.tipoDocumento}
            options={[
              {value: 'DNI',
              label: 'DNI'},
              {value: 'RUC',
              label: 'RUC'}
            ]}
            label='Tipo de documento'
            required
          />
          <FormInput
            name='documento'
            type='text'
            handleChange={this.handleChange}
            value={this.state.documento}
            label='Documento'
            required
          />
          <FormInput
            name='correoElectronico'
            type='text'
            handleChange={this.handleChange}
            value={this.state.correoElectronico}
            label='Correo electrónico'
            required
          />
          <FormInput
            name='telefono'
            type='text'
            handleChange={this.handleChange}
            value={this.state.telefono}
            label='Número de teléfono'
            required
          />
          <FormInput
            name='compania'
            type='text'
            handleChange={this.handleChange}
            value={this.state.compania}
            label='Compañía del teléfono'
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
