import React, { Component } from 'react';
import CityList from './CityList';
import App from '../App';
import Search from './Search';



class MyList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      cityList: this.props.myCity
      
    }
  }

  addItem = (e) => {
    console.log('Add City');
    this.setState({
      city: this.props.city,
    });
}


render() {
    
    console.log(this.state.city);
    return (
      <div>
         
        
        
        <br />
        <button onClick={this.addItem}>Add City!</button>
        <br />


      </div>
    )
  }
}

export default MyList;