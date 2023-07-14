import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAC7aCpD6q7g5ldIyUEX0KXWYpKx16zxLw",
  authDomain: "gamp-camp-online.firebaseapp.com",
  projectId: "gamp-camp-online",
  storageBucket: "gamp-camp-online.appspot.com",
  messagingSenderId: "955146598654",
  appId: "1:955146598654:web:b2fa241cfe87d92a89cdaf"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const authProvider = new GoogleAuthProvider();

export function signInWithGoogle(): void {
  signInWithPopup(auth, authProvider);
}
export function signOut(): void {
  auth.signOut();
}