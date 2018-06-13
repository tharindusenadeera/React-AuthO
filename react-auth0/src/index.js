import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

let state = {};
window.setState = (changes) => {
        state = Object.assign({}, state, changes);

        ReactDOM.render( < App {...state }
            /> , document.getElementById('root'));
        };

        let initialState = {

            name: "Tharindu"

        };

        window.setState(initialState);


        registerServiceWorker();