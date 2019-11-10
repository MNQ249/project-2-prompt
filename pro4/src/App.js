import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Errors from './pages/Errors';
import Cityinfo from './pages/Cityinfo';

class  App extends Component {

constructor(props){
super(props);

this.state={

  data:[]
}
}


addNewcity=(obj)=>{
  console.log(obj);
  this.setState({
      data:[obj,... this.state.data]
  })}

 removeCity=(rm)=>{
   console.log(rm);
   this.setState({
     data: this.state.data
   })
 } 

 


  render(){
  return (

    <Router>
    <nav>
      <Link  to='/'>Home Page</Link>{'  '}
      <Link to='/cityinfo'>City Information</Link>{'  '}
    
    </nav>
    <div>
      <Switch>
      <Route exact path='/' component={()=><Home  newObj ={this.addNewcity} remove={this.removeCity}  list={this.state.data} />}/>
      <Route  path='/cityinfo' component={Cityinfo}/>
      <Route  component={Errors}/>
      </Switch>
    </div>
  </Router>
  );
    }
}

export default App;
