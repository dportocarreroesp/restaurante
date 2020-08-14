import React from 'react';


import './collection-item.styles.scss';

const CollectionItem = ({item}) => {
    const {nombre, precio, imagen} = item;
    return (
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imagen})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'> {nombre} </span>
            <span className='price'> {precio} </span>
        </div>
    </div>
)};



export default CollectionItem;