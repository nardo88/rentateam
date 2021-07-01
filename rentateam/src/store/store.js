import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk'
import reducerGetDate from "./reducers/reducerGetDate";
import reducerCart from './reducers/reducerCart'

const reducers = combineReducers({
    data: reducerGetDate,
    cart: reducerCart
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))



export default store;