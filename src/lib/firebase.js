import Firebase from 'firebase/app'
import 'firebase/firestore' 
import 'firebase/auth' 

const config = {
    apiKey: "AIzaSyAnMdEjT8-ymRWzmZfhfmgNnYoVGK35XkE",
    authDomain: "instaclone-845cc.firebaseapp.com",
    projectId: "instaclone-845cc",
    storageBucket: "instaclone-845cc.appspot.com",
    messagingSenderId: "1052470028194",
    appId: "1:1052470028194:web:20b1ecef4492c5067834fb"

};


const firebase = Firebase.initializeApp(config);
const {FieldValue} = Firebase.firestore()



export {firebase, FieldValue};