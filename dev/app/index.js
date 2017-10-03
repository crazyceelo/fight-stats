'use strict';

//import react, render, provider to server the store values and store.
import React from "react";
import {render} from "react-dom";
import {Provider} from 'react-redux';
import store from './store';

//import Main App
import Routing from './routes/routes';

render(
    <Provider store={store}>
       <Routing />
    </Provider>
, window.document.getElementById('app'));

if(module.hot){
  module.hot.accept();
}