import React from 'react';
import List from './List';

function GroceryList({items}) {
    return(
        <div>
            <h2>Grocery List</h2>
            <List items={items} />
        </div>
    )
}

export default GroceryList;