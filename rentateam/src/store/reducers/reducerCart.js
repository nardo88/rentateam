import 'firebase/database';
import { createFireBase } from '../../components/Functions/functions';

const ADD_PRODUCT = 'ADD_PRODUCT';
const PLUS = 'PLUS'
const MINUS = 'MINUS'
const CLEAR = 'CLEAR'
const CHANGE_STREET = 'CHANGE_STREET'
const CHANGE_HOUSE = 'CHANGE_HOUSE'
const REQUIRE = 'REQUIRE'
const FILTER_CART = 'FILTER_CART'

const initialState = {
    products: [],
    total: 0,
    adress: {
        street: '',
        house: ''
    },
    hasAdress: false
}


const reducerCart = (state = initialState, action) => {

    switch (action.type) {

        case ADD_PRODUCT:
            const newState = {...state,};
            newState.products = [...state.products, {id: action.id, number: 1, delivery: action.delivery, price: action.price}];
            newState.total = state.total + action.price;
            return newState
        case PLUS:
            const plusState = {
                ...state
            }
            plusState.products = [...state.products]
            plusState.products.map(item => item.id === action.id && item.number++)
            plusState.total = state.total + action.price
            return plusState
        case MINUS:
            const minusState = {...state}
            minusState.products = [...state.products]
            minusState.products = minusState.products.map(item => {
                if (item.id === action.id){
                    item.number--
                    return item
                }
                return item
            }).filter(item => item.number !== 0)

            minusState.total = state.total - action.price

        return minusState

        case CLEAR:
            return {products: [], total: 0, adress: {street: '', house: ''}}
        case CHANGE_STREET: 
            const adress1 = {...state.adress}
            adress1.street = action.value
            return {...state, adress : adress1, hasAdress: false}

        case CHANGE_HOUSE: 
            const adress2 = {...state.adress}
            adress2.house = action.value
            return {...state, adress : adress2, hasAdress: false}
        case REQUIRE:
            return {...state, hasAdress: true}
        case FILTER_CART:
            const filterState = {...state}
            filterState.products = state.products.filter(item => {
                if (item.delivery === false){
                    filterState.total = filterState.total - (item.price * item.number )
                    return null
                } 
                return item
            })
            return filterState

        default:
            return state
    }

}


// action creater
export const addProduct = (id, price, delivery) => ({
    type: ADD_PRODUCT,
    id,
    price,
    delivery,
    
})
export const plus = (id, price) => ({
    type: PLUS,
    id,
    price
})

export const minus =(id, price) => ({
    type: MINUS,
    id,
    price
})

const clearAC = () => ({type: CLEAR})

export const changeStreet = (value) => ({type: CHANGE_STREET, value })
export const changeHouse = (value) => ({type: CHANGE_HOUSE, value })

const requireAC = (bool) => ({type: REQUIRE, bool})

export const filterCart = () => ({type: FILTER_CART})


// thunk

export const sendCart = (order, delivery) => {
    return (dispatch) => {
        const dataBase = createFireBase()
        if (delivery){
            if (order.adress.street === '' || order.adress.house === '' ){
                dispatch(requireAC(true))
                return
            }
        }

        delete order.hasAdress

        dataBase.ref('orders/').push().set({
            order,
            delivery
        }).then(() => {
            console.log('sended', `доставка = ${delivery}`, order);
            dispatch(clearAC())
        })
    }

}


export default reducerCart