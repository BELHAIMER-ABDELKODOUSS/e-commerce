import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config={
  apiKey: "AIzaSyAjOHF955ulsIn4U75kipkkjH5UEpjecSs",
  authDomain: "crwd-project.firebaseapp.com",
  projectId: "crwd-project",
  storageBucket: "crwd-project.appspot.com",
  messagingSenderId: "255179528786",
  appId: "1:255179528786:web:4830f97ebeb0b00e2d1d8b",
  measurementId: "G-K64XE03SCL"
}

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};



export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const signInWithGoogle=()=>auth.signInWithPopup(provider);

export default firebase;
