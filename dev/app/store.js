'use strict';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import thunk from 'redux-thunk';

//Component Reducers
import navbarReducer from './header/navbar/reducer.js';
import eventsReducer from './body/events/reducer.js';
import eventPicksReducer from './body/eventpicks/reducer.js';

export default createStore(combineReducers({
    navbarReducer,
    eventsReducer,
    eventPicksReducer

}),{},applyMiddleware(logger,thunk));

