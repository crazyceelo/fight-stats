'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

//Component Reducers
import navbarReducer from './header/navbar/reducer.js';

export default createStore(combineReducers({
    navbarReducer
}),applyMiddleware(logger,thunk));