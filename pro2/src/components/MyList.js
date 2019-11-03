import React, { Component } from 'react';
import CityList from './CityList';


class MyList extends Component {
  constructor(props) {
    super(props);

    // Initial state copied from component props.
    this.state = {
      toDoItems: this.props.myCity,
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
        <h1>Things I should start doing:</h1>
        <CityList todoItems={this.state.toDoItems} />
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