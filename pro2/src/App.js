import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import CityList from './components/CityList';
import Search from './components/Search';
import MyList from './components/MyList';




class App extends Component {

constructor(props){
super(props)
this.state = {
  
    searchValue: '',
    cityToDisplay: this.props.cities,
    filteredCity:[]
}
}
handleSearchChange = (e) => {
  const textValue = e.target.value;

  const filteredCity = this.props.cities.filter(function(city) {
    return city.toLowerCase().includes(textValue.toLowerCase());
  });

  this.setState({
    searchValue: textValue,
    filteredCity: filteredCity
  });
}

clearList = (e) => {
  this.setState({
    filteredCity: []
  });
}

render(){



  return (
    <div className="App">
      <h1> List of Cities</h1>
      <Search
          value={this.state.searchValue}
          onChange={this.handleSearchChange} />
        <CityList myCity={this.state.filteredCity}/>
        <MyList city={this.state.searchValue} />

        <button onClick={this.clearList}>
          clear Everything
        </button>
    </div>
  );
}
}

export default App;
