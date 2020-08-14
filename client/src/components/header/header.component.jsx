import React from 'react';
import {Link} from 'react-router-dom';
import Ganso from '../../ganso';
import FormSelect from '../form-select/form-select.component';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.action';
import { setCurrentProducts } from '../../redux/products/products.action';
import { rowsToObject } from '../../utils'

import './header.styles.scss';


class Header extends React.Component {

    handleChange = async event => {
        const {value} = event.target;
    
        await this.props.setCurrentUser({
            sucursal: value
        })
        
        fetch('http://localhost:9000/producto/'+this.props.currentUser.sucursal)
            .then(res => res.json())
            .then(res => {
                this.props.setCurrentProducts(rowsToObject(res.rows))
            })
    }

    render() {
        return (
            <div className='header'>
                <Link className='logo-container' to='/' >
                    <Ganso className='logo' />
                </Link>
                <div className='options'>
                    <Link className='option' to='/forms'>
                        FORMS
                    </Link>
                    <Link className='option' to='/pedidos'>
                        pedidos
                    </Link>
                    <Link className='option' to='/corte'>
                        corte
                    </Link>
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
                        label = ''
                        required
                    />
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    currentProducts: state.products.currentProducts
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
    setCurrentProducts: products => dispatch(setCurrentProducts(products))
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);