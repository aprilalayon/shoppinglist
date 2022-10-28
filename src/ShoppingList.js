import React, { Component } from 'react';


class ShoppingList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: this.props.list
    };

    this.itemDelete = this.itemDelete.bind(this);
  }

  itemDelete(id) {
    const eachItem = this.state.list;
    eachItem.splice(id, 1);
    this.setState({ eachItem }); 
  }

  render() {
    const updatedList= this.state.list;
    return updatedList.map((eachItem, id) => {
        return (
          <div className="ShoppingList">
            <ul>
                <li key={id}>
                  <p>{eachItem}</p>
                  <button type="submit" onClick={() => this.itemDelete(id)}>Delete</button>
                </li>
            </ul>
        </div>
      );
    });
  }
}

export default ShoppingList;
