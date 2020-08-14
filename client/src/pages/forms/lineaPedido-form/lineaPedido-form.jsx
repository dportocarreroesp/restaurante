import React from 'react';
import LineaPedidoForm from '../../../components/lineaPedido-form/lineaPedido-form.component';
import CustomButton from '../../../components/custom-button/custom-button.component';

class LineasPedido extends React.Component{
    constructor() {
      super();
  
      this.state = {
        id_Pedido: '',
        numLineas: 1
      };
    }
  
    handleSubmit = async event => {
      event.preventDefault();
      // Crear lineaPedidoRouter
    }; 
  
    handleChange = async event => {
      const { value, name } = event.target;
      await this.setState({ [name]: value });
      console.log(this.state)
    };
  
    render() {
      var lineas = [];
      for (let index = 1; index <= this.state.numLineas; index++) {
        lineas.push(<LineaPedidoForm key = {index} id={index} />)
      }
      return (
        <div className='lineas-pedido-form'>
          <CustomButton type='button' onClick = {() => {this.setState({numLineas: this.state.numLineas +1})}}> Agregar </CustomButton>
          {lineas}
        </div>
      )
    }
  };
  
  export default LineasPedido;