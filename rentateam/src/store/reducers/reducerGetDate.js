import 'firebase/database';
import { createFireBase } from '../../components/Functions/functions';

const GET_CATEGORIES = 'GET_CATEGORIES';
const IS_FETCHING = 'IS_FETCHING';
const IS_DELIVERI = 'IS_DELIVERI';


const initialState = {
    categoryes: [],
    products: [],
    isFetching: true,
    isDeliveri: false
}



const reducerGetDate = (state = initialState, action) => {

    switch (action.type) {
        case GET_CATEGORIES:
            return {...state, categoryes: [...action.state.categoryes], products: [...action.state.products]};
        case IS_FETCHING:
            return {...state, isFetching: action.bull}
        case IS_DELIVERI: 
            return {...state, isDeliveri: action.bull}
        default:
            return state;
    }
    
}


// action creater
export const getDataAC = (state) => ({type: GET_CATEGORIES,state})
const isFetchingAC = (bull) => ({type: IS_FETCHING, bull})
export const isDeliveriAC = (bull) => ({type: IS_DELIVERI, bull })

// создаем thunkCreator
export const createGetDataThunk = () => {
    return (dispatch) => {

        const dataBase = createFireBase()

        const dbRef = dataBase.ref('/')
        dbRef.get().then((snapshot) => {
            dispatch(getDataAC((snapshot.val())))
        }).then(() => {
            dispatch(isFetchingAC(false))
        }).catch(() => {
            alert('client is offline. Такое бывает когда FireBase подтупливает, нужно просто обновить страницу')
        })
    }
}

export default reducerGetDate;