import React from 'react';
import ListItem from './ListItem'



class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {groceryItems: [
      {id: 1, title: "Toothpaste"},
      {id: 2, title: "Bread"},
      {id: 3, title: "Almond milk"},
      {id: 4, title: "Chocolate"}
    ]};
  }

  onItemClick(item) {
    console.log(`clicked ${item.id}: ${item.title}`);
  }

      render() {
        return (
          <div>
            <ul>
              {this.state.groceryItems.map((item) => (
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