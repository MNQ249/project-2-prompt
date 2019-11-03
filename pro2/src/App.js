import React from 'react';
import logo from './logo.svg';
import './App.css';
import CityList from './components/CityList';
import Search from './components/Search';


function App() {

const cities = ['Riyadh','Jeddah','Dammam','Al-Khobar','Dhahran','Al-Ahsa','Abha','Al Baha','Jizan','Najran','Hail']

  return (
    <div className="App">
      <h1> List of Cities</h1>
      <Search/>
       <CityList myCity = {cities}/>
    </div>
  );
}

export default App;
