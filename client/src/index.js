import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import App from './App/App';


window.global = {}; //defines the global object.

axios.all([
    axios.get('/api/header'),
    axios.get('/api/general'),
    axios.get('/api/components')
]).then(axios.spread((headerData, generalData, componentsData) => {
    console.log("headerData", headerData.data);
    console.log("generalData", generalData.data);
    console.log("componentsData", componentsData.data);

    window.global.header = headerData.data;
    window.global.general = generalData.data;
    window.global.components = componentsData.data;

    ReactDOM.render(<App />, document.getElementById('root'));
}));


