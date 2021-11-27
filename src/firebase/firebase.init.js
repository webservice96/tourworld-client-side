import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase.config';

const initializeAuthebtication = () => {
    initializeApp(firebaseConfig);
}

export default initializeAuthebtication;