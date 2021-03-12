import { applyMiddleware, createStore } from "redux";
import reducer from './pokemon/pokemonReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'
import {logger} from 'redux-logger'

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, thunk))); //all'interno della func vuole i reducer