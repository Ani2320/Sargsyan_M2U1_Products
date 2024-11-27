import { getFirestore } from 'firebase/firestore';
import 'firebase/database'; 
import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDk3cZyCdDqkYB5DgeOJzJdfXTNVCHHNRQ",
    authDomain: "products-ani-utn.firebaseapp.com",
    projectId: "products-ani-utn",
    storageBucket: "products-ani-utn.firebasestorage.app",
    messagingSenderId: "427612577264",
    appId: "1:427612577264:web:5bb8169ce541d3cab41135"
};

const app = firebase.initializeApp(firebaseConfig);
// Referencia a la base de datos
console.log("Conexión a la base de datos con éxito");
export const database = getFirestore(app);
export const db = getDatabase(app);
export const auth = getAuth(app);
