import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import reducerGetDate from "./reducers/reducerGetDate";

const reducers = combineReducers({
    data: reducerGetDate
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store;