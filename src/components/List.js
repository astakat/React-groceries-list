import React from 'react'
import ListItem from './ListItem'

class List extends React.Component {
    render() {
      return (
        <div>
          <ul>
            {this.props.items.map((item) => (
              <ListItem 
                key={item.id}
                item={item}
                clickItem={() => this.onItemClick(item)} 
              />
            ))}
          </ul>;
        </div>
        ); 
    }
      
} 
        
    

export default List;