import firebase from 'firebase/app';
import 'firebase/database';

const GET_CATEGORIES = 'GET_CATEGORIES';
const IS_FETCHING = 'IS_FETCHING';
const ID_DELIVERI = 'ID_DELIVERI';


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
        case ID_DELIVERI: 
            return {...state, isDeliveri: action.bull}
        default:
            return state;
    }
    
}


// action creater
export const getDataAC = (state) => ({type: GET_CATEGORIES,state})
const isFetchingAC = (bull) => ({type: IS_FETCHING, bull})
export const isDeliveriAC = (bull) => ({type: ID_DELIVERI, bull })

// создаем thunkCreator
export const createGetDataThunk = () => {
    return (dispatch) => {
        
        const firebaseConfig = {
            apiKey: "AIzaSyAPrxmAINRrwW3Smbk-YbQA5TKJkxfXP8U",
            authDomain: "renta-team.firebaseapp.com",
            databaseURL: "https://renta-team-default-rtdb.europe-west1.firebasedatabase.app",
            projectId: "renta-team",
            storageBucket: "renta-team.appspot.com",
            messagingSenderId: "1014475257354",
            appId: "1:1014475257354:web:0bbf4c895fde90028ad1f3"
        };

        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }

        const dataBase = firebase.database();

        const dbRef = dataBase.ref('/')
        dbRef.get().then((snapshot) => {
            dispatch(getDataAC((snapshot.val())))
        }).then(() => {
            dispatch(isFetchingAC(false))
        }).catch(() => {
            alert('client is offline')
        })

        //  dbRef.get().then((snapshot) => {
        //     dispatch(getDataAC((snapshot.val())))
        // })
        
        

    }
}

export default reducerGetDate;