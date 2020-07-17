import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormSelect from '../form-select/form-select.component';

import './empleado-form.styles.scss';

class EmpleadoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id_Persona: '',
      horasSemana: '',
      id_RolEmpleado: '',
      id_Sucursal: ''
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
      <div className='empleado-form'>
        <h2> Formulario de Empleado </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='id_Persona'
            type='text'
            handleChange={this.handleChange}
            value={this.state.id_Persona}
            label='ID de persona'
            required
          />
          <FormInput
            name='horasSemana'
            type='number'
            handleChange={this.handleChange}
            value={this.state.horasSemana}
            label='Horas que trabaja a la semana'
            required
          />
          <FormSelect
            name = 'id_RolEmpleado'
            type = 'number'
            handleChange = {this.handleChange}
            options = {[
                {
                    value: 1, label:'Mozo'
                },
                {
                    value: 2, label:'Administrador'
                },
                {
                    value: 3, label:'Recepcionista'
                }
            ]}
            label = 'Rol del empleado'
            required
          />
          <FormSelect
            name = 'id_Sucursal'
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
            <CustomButton type='submit'> Registrar empleado </CustomButton>
          </div>
        </form>
      </div>
    );
  }//Sign in es props.children
}

export default EmpleadoForm;
