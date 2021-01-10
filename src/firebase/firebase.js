import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCxZJ3RduvpNB8J9ZfaZdFN94uncnBBRx0",
    authDomain: "expensify-app-2d71b.firebaseapp.com",
    databaseURL: "https://expensify-app-2d71b.firebaseio.com",
    projectId: "expensify-app-2d71b",
    storageBucket: "expensify-app-2d71b.appspot.com",
    messagingSenderId: "508040221537",
    appId: "1:508040221537:web:a3ea30e8fe4cd33f2d2b20",
    measurementId: "G-3JX5J0KYXC"
}

firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }


// database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// })

// database.ref().once('value')
// .then((snapshot) => {
//     const val = snapshot.val()
//     console.log(val);
// })
// .catch((e) => {
//     console.log(e);
// })
// database.ref().set({
//     name: 'Jonatas Sallazar',
//     age: 26,
//     isSingle: false,
//     location: {
//         city: 'Hortocity',
//         country: 'Brazil'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((e) => {
//     console.log('error:', e);
// })

// database.ref('isSingle')
//     .remove()
//     .then(() => {
//         console.log('Removed');
//     })
//     .catch((e) => {
//         console.log(e);
//     })