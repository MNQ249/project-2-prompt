import React, { Component } from 'react';
import CityList from './CityList';
import App from '../App';
import Search from './Search';



class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: this.props.cities,
      newItem: ''
    }
  }

  clearList = (e) => {
    this.setState({
      toDoItems: []
    });
  }

  onTextBoxChange = (e) => {
    console.log('On Text Change', e.target.value);

    this.setState({
      newItem: e.target.value
    });
  }

  addItem = (e) => {
    console.log('Add Item');
    this.setState({
      toDoItems: [...this.state.toDoItems, this.state.newItem],
      newItem: ''
    });
  }

  render() {

    return (
      <div>
          <label> name city</label>
        
        < todoItems={this.state.toDoItems} />
        <br />

        <input type="text"
          value={this.state.newItem}
          onChange={this.onTextBoxChange}
          placeholder="Type a task here!" />
    
        <button onClick={this.addItem}>Add Task!</button>
      

        <br />

        <button onClick={this.clearList}>
          clear Everything
        </button>
      </div>
    )
  }
}

export default MyList;