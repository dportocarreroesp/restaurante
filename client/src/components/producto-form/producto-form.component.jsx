import React from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import FormSelect from '../form-select/form-select.component';

import './producto-form.styles.scss';

class ProductoForm extends React.Component {
  constructor() {
    super();

    this.state = {
      nombre: '',
      precio: '',
      descripcion: '',
      disponible: 1,
      id_Categoria: 1,
      id_Sucursal: 1
    };
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {nombre, precio, descripcion, disponible, id_Categoria, id_Sucursal} = this.state;

    await fetch('http://localhost:9000/producto', {
      method: 'POST',
      headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          nombre: nombre,
          precio: precio,
          descripcion: descripcion,
          disponible: disponible,
          id_Categoria: id_Categoria,
          id_Sucursal: id_Sucursal
      })
    })
    .then(this.setState({
      nombre: '',
      precio: '',
      descripcion: '',
      disponible: '',
      id_Categoria: '',
      id_Sucursal: ''
    }))
  }; 

  handleChange = async event => {
    const { value, name } = event.target;
    await this.setState({ [name]: value });
    console.log(this.state)
  };

  render() {
    return (
      <div className='producto-form'>
        <h2> Formulario de Producto </h2>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='nombre'
            type='text'
            handleChange={this.handleChange}
            value={this.state.nombre}
            label='Nombre del producto'
            required
          />
          <FormInput
            name='precio'
            type='number'
            handleChange={this.handleChange}
            value={this.state.precio}
            label='Precio del producto'
            required
          />
          <FormInput
            name='descripcion'
            type='text'
            handleChange={this.handleChange}
            value={this.state.descripcion}
            label='Descripción del producto'
            required
          />
          <FormSelect
            name = 'disponible'
            type = 'number'
            handleChange = {this.handleChange}
            options = {[
                {
                    value: 1, label:'SI DISPONIBLE'
                },
                {
                    value: 2, label:'NO DISPONIBLE'
                }
            ]}
            label = '¿Disponible?'
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
          <FormSelect
            name = 'id_Categoria'
            type = 'number'
            handleChange = {this.handleChange}
            options = {[
                {
                    value: 1, label:'Entrada'
                },
                {
                    value: 2, label:'Bebida'
                },
                {
                    value: 3, label:'Mariscos'
                },
                {
                    value: 4, label:'Parrilla'
                }
            ]}
            label = 'Categoría del producto'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Registrar Producto </CustomButton>
          </div>
        </form>
      </div>
    );
  }//Sign in es props.children
}

export default ProductoForm;

