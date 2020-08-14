import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormSelect from '../form-select/form-select.component';
import { connect } from 'react-redux';

import './empleado-form.styles.scss';

class EmpleadoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      correoElectronico: '',
      telefono: '',
      compania: '',
      tipoDocumento: 0,
      documento: '',
      horasSemana: '',
      id_RolEmpleado: '',
      id_Sucursal: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {nombres, apellidoPaterno, apellidoMaterno, fechaNacimiento, correoElectronico, telefono, compania, tipoDocumento, documento, horasSemana, id_RolEmpleado, id_Sucursal, password} = this.state;

    await fetch('http://localhost:9000/empleado/'+this.props.currentUser.sucursal, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          nombres: nombres,
          apellidoPaterno: apellidoPaterno,
          apellidoMaterno: apellidoMaterno,
          fechaNacimiento: fechaNacimiento,
          correoElectronico: correoElectronico,
          telefono: telefono,
          compania: compania,
          tipoDocumento: tipoDocumento,
          documento: documento,
          horasSemana: horasSemana,
          id_RolEmpleado: id_RolEmpleado,
          id_Sucursal: id_Sucursal,
          password: password
      })
    })
    .then(this.setState({
      nombres: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      fechaNacimiento: '',
      correoElectronico: '',
      telefono: '',
      compania: '',
      tipoDocumento: 0,
      documento: '',
      horasSemana: '',
      id_RolEmpleado: '',
      id_Sucursal: '',
      password: ''
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
              {value: 1,
              label: 'DNI'},
              {value: 2,
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
            name='password'
            type='password'
            handleChange={this.handleChange}
            value={this.state.password}
            label='Contraseña'
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
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})


export default connect(mapStateToProps)(EmpleadoForm);
