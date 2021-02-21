import * as firebase from 'firebase'

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
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