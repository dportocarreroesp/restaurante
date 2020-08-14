import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component'
import { connect } from 'react-redux';
import { rowsToObject } from '../../utils';
import { setCurrentProducts } from '../../redux/products/products.action';

import './homepage.styles.scss';


class Homepage extends React.Component {
    

    getProductos = () => {
        fetch("http://localhost:9000/producto/"+this.props.currentUser.sucursal)
        .then(res => res.json())
        .then(res => {
            this.props.setCurrentProducts(rowsToObject(res.rows))
        })
    }

    

    componentDidMount() {
        this.getProductos();
    }

    componentDidUpdate() {
        this.getProductos();
    }

    render(){
        const collections = Array.from(this.props.currentProducts);
        console.log(collections);
        return (
            <div className='shop-page'>
                {collections.map(({id, ...otherCollectionProps}) => (
                    <CollectionPreview  key={id} {...otherCollectionProps} />
                ))}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser,
    currentProducts: state.products.currentProducts
})

const mapDispatchToProps = dispatch => ({
    setCurrentProducts: products => dispatch(setCurrentProducts(products))
})

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
