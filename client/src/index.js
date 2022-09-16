import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, compose} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {createRoot} from 'react-dom/client'

import thunk from 'redux-thunk';

import reducers from './reducers';

import App from './App.js';

import './index.css';



const store = configureStore({reducer:reducers}, compose(applyMiddleware(thunk)));


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}>
    <App />
</Provider>);

