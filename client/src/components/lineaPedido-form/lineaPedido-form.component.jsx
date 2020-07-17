import React from 'react';
import FormInput from '../form-input/form-input.component';
import FormSelect from '../form-select/form-select.component';
import CustomButton from '../custom-button/custom-button.component';

import './lineaPedido-form.styles.scss';

class LineaPedidoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      id: '',
      id_Pedido: '',
      id_Producto: '',
      cantidad: 0
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    console.log(this.state)
  }; 

  handleChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='lineaPedido-form'>
        <h2>Linea Pedido</h2>
        <form onSubmit={this.handleSubmit}>
          <FormSelect
            name = 'id_Producto'
            type = 'number'
            handleChange = {this.handleChange}
            options = {[
                {
                    value: 1, label:'Huevo frito'
                },
                {
                    value: 2, label:'Milanesa de pollo'
                },
                {
                    value: 3, label:'Chicha morada'
                },
                {
                    value: 4, label:'Ensalada César'
                }
            ]}
            label = 'Producto'
            required
          />
          <FormInput
            name='cantidad'
            type='number'
            handleChange={this.handleChange}
            value={this.state.cantidad}
            label='Cantidad'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Registrar Pedido </CustomButton>
          </div>
        </form>
      </div>
    );
  }//Sign in es props.children
}

export default LineaPedidoForm;
