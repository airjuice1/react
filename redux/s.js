import { createStore, combineReducers } from 'redux';
import * as reducers from './r';

const state = {}

export default createStore(combineReducers(reducers), state);