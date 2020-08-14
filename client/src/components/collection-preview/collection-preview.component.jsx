import React from 'react';

import './collection-preview.styles.scss';

import CollectionItem from '../collection-item/collection-item.component';

const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
        <h1 className='title'>{ title.toUpperCase() }</h1>
        <div className='preview'>
            {items.map(item => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
        {/* <div className='preview'>
            {items.filter((item, idx)=>idx > 0 && idx < 4).map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div>
        <div className='preview'>
            {items.filter((item, idx)=>idx > 3 && idx < 8).map((item) => (
                <CollectionItem key={item.id} item={item} />
            ))}
        </div> */}
    </div>
);

export default CollectionPreview;