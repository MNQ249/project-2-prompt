import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const cities = ['Riyadh','Jeddah','Dammam','Al-Khobar','Dhahran','Al-Ahsa','Abha','Al Baha','Jizan','Najran','Hail']

ReactDOM.render(<App cities={cities}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
