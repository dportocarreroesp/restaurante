import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormSelect from '../form-select/form-select.component';
import { connect } from 'react-redux';

import './reservacion-form.styles.scss';

class ReservacionForm extends React.Component {
  constructor() {
    super();

    this.state = {
      fecha: '',
      hora: '',
      correoEmpleado: '',
      correoPersona: '',
      id_Mesa: 0,
      mesasDisponibles: []
    };
  }// fecha, hora, correo empleado, cliente, mesa, sucursal createPedido()

  async componentDidMount(){
    const today = new Date();
    await this.setState({
      fecha: today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate(),
      hora: today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
    })

    const { fecha, hora } = this.state

    fetch("http://localhost:9000/reservacion/"+fecha+'&'+hora+'&'+this.props.currentUser.sucursal)
    .then(res => res.json())
    .then(res => {
        this.setState({mesasDisponibles: res.rows})
        console.log(this.state)
    })
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {fecha, hora, correoEmpleado, correoPersona, id_Mesa} = this.state;

    await fetch('http://localhost:9000/reservacion/'+this.props.currentUser.sucursal, {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fecha: fecha,
        hora: hora,
        correoEmpleado: correoEmpleado,
        correoPersona: correoPersona,
        id_Mesa: id_Mesa
      })
    })
    .then(this.setState({
        fecha: '',
        hora: '',
        correoEmpleado: '',
        correoPersona: '',
        id_Mesa: 0
    }))
  }; 

  handleChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
    console.log(this.state)
  };

  render() {
    return (
      <div className='reservacion-form'>
        <h2> Formulario de Reservación </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='fecha'
            type='date'
            handleChange={this.handleChange}
            value={this.state.fecha}
            label=''
            required
          />
          <FormInput
            name='hora'
            type='time'
            handleChange={this.handleChange}
            value={this.state.hora}
            label='Hora de la reservación'
            required
          />
          <FormInput
            name='correoEmpleado'
            type='text'
            handleChange={this.handleChange}
            value={this.state.correoEmpleado}
            label='Correo del empleado'
            required
          />
          <FormInput
            name='correoPersona'
            type='text'
            handleChange={this.handleChange}
            value={this.state.correoPersona}
            label='Correo de la persona'
            required
          />
          <FormSelect
            name = 'id_Mesa'
            type = 'number'
            handleChange = {this.handleChange}
            options = {
                this.state.mesasDisponibles.map(element => {
                    return {
                      value: element.outidmesa,
                      label: `Mesa ${element.outidmesa}`
                    }
                })
            }
            label = 'Mesas Disponibles'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Realizar Reservación </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(ReservacionForm);

