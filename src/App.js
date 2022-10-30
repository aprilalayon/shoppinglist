import React, { Component } from 'react';
import './styles/App.css';
import ShoppingList from './ShoppingList';
import Background from './images/paper.png';

var bgStyle = {
  backgroundImage: `url(${Background})`
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemInput: '',
      shoppingList: [],
    };

    this.inputChange = this.inputChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  inputChange(e) {
    this.setState({
      itemInput: e.target.value
    });
  }

  formSubmit(e) {
    e.preventDefault();

    let listItem = this.state.itemInput;

    if (listItem !== null && listItem !== '') {
      this.state.shoppingList.push(listItem);
      this.setState({
        itemInput: listItem
      });
    }else{
      this.setState({
        itemInput: ''
      });
    }

    this.setState({
      itemInput: ''
    });
  }

  render() {
    return (
      <div 
        className="wrapper"
        style={ bgStyle }
      >
        <form onSubmit={this.formSubmit}>
          <h1>Today's Checklist</h1>
              <input 
                type="text"
                placeholder="Enter an item"
                value={this.state.itemInput} 
                onChange={this.inputChange} />
            <button type="submit" onClick={this.formSubmit} >Add to list</button>
        </form>
        
        <ShoppingList 
          list={this.state.shoppingList}
        />
      </div>
    );
  }
}

export default App;
