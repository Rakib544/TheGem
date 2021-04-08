import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './Firebase.config';

export const LoginFrameWorkInitialized = () => {
    if(!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const googleLogin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(googleProvider)
    .then(res => {
        const userInfo = {}
        userInfo.name = res.user.displayName;
        userInfo.image = res.user.photoURL;
        userInfo.email = res.user.email
        return userInfo;
    })
    .catch(err => {
        console.log(err)
    })
}