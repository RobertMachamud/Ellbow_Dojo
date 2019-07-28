import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import './Sparring/SelectSparring.css'
// import SelectSparring from './Select/SelectSparring'
// import './Sparring/SparringProgramm.css'
// import SparringProgramm from './Sparring/SparringProgramm'
import Sparring from './Sparring/Sparring'

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<SelectSparring />, document.getElementById('root'));
ReactDOM.render(<Sparring />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
