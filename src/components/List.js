import React from 'react';
import ListItem from './ListItem'

class List extends React.Component {
    render() {
        return <ul>
          <ListItem title= "Toothpaste"/>
          <ListItem title= "Tea"/>
          <ListItem title= "Bread"/>
          <ListItem title= "Almond milk"/>
        </ul>;
    }
      
} 
        
    

export default List;