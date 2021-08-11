import { combineReducers, createStore, applyMiddleware} from "redux";
import logger from 'redux-logger'
import counterReducer from "./Action/Voting";

const reducer = combineReducers({
  counter: counterReducer    //maps the reducer
});

const store = createStore(reducer, applyMiddleware(logger));

export default store;
