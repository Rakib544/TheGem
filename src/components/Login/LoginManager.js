import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './Firebase.config';



export const initializedApplication = () => {
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig)
    }
}

export const createUserWithEmailAndPassword = (name, email, password) => {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(res => {
            updateUserInfo(name);
            const newUser = res.user
            newUser.success = true;
            newUser.error = '';
            return newUser;
        })
        .catch(err => {
            const newUser = {}
            newUser.success = false;
            newUser.error = err.message;
            return newUser
        })
}

export const signInWithEmailAndPassword = (email, password) => {
    return firebase.auth().signInWithEmailAndPassword(email, password)
        .then(res => {
            const newUser = res.user
            newUser.success = true;
            newUser.error = '';
            return newUser;
            
        })
        .catch(err => {
            const newUser = {}
            newUser.success = false;
            newUser.error = err.message;
            return newUser
        })
}

const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
        displayName: name,
    })
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
}

export const signInWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    return firebase.auth().signInWithPopup(googleProvider)
        .then(res => {
            const newUser = res.user
            newUser.success = true;
            newUser.error = '';
            return newUser;
        })
        .catch(err => {
            const newUser = {}
            newUser.success = false;
            newUser.error = err.message;
            return newUser
        })
}