import React from 'react';
import List from './List';

function ShoppingCart({items}) {
    return(
        <div>
            <h2>Shopping Cart</h2>
            <List items={items}/>
        </div>
    )
}

export default ShoppingCart;