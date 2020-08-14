import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { connect } from 'react-redux';

import './corte-form.styles.scss';

class CorteForm extends React.Component {
  constructor() {
    super();

    this.state = {
      fechaInicio: '',
      fechaFin: '',
      total: 0
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {fechaInicio, fechaFin} = this.state;

    fetch('http://localhost:9000/corte/'+this.props.currentUser.sucursal+'&'+fechaInicio+'&'+fechaFin)
    .then(res => res.json())
    .then(res => {
        this.setState({
          fechaInicio: '',
          fechaFin: '',
          total: res.rows[0].total
        })
    })

  }; 

  handleChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='corte-form'>
        <h2> Cortes Turno </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='fechaInicio'
            type='date'
            handleChange={this.handleChange}
            value={this.state.fechaInicio}
            label='Fecha de inicio'
            required
          />
          <FormInput
            name='fechaFin'
            type='date'
            handleChange={this.handleChange}
            value={this.state.fechaFin}
            label='Fecha final'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Calcular Corte </CustomButton>
          </div>
          <h2>Corte Total: {this.state.total}</h2>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(CorteForm);