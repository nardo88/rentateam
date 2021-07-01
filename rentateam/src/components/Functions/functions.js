import firebase from 'firebase/app';
import 'firebase/database';

export const getCard = (id, products) => {
    const arr = []
    id.forEach(item => {
        arr.push(products.find(elem => elem.id === item))
    })
    return arr
}

export const isInCart = (arr, id) => {
    let num = null
    arr.forEach(elem => {
        if (elem.id === id) num = elem.number 
    }) 
    return num ? num : false
}

export const createFireBase = () => {
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

    return firebase.database();
}
