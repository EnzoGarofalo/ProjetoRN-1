// dependencias  do banco de dados
import firebase from 'firebase';
import 'firebase/firestore';

//Config. Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCcFjHQ_smWDcOm6_OFSUKfbm9kKAPG0CQ",
    authDomain: "projetorn-final.firebaseapp.com",
    projectId: "projetorn-final",
    storageBucket: "projetorn-final.appspot.com",
    messagingSenderId: "79746907970",
    appId: "1:79746907970:web:53c64bd818ebc7835912db",
    measurementId: "G-VBK81SSRMD"
};
//inicializa o fb
firebase.initializeApp(firebaseConfig );
firebase.analytics();
firebase.firestore();

export default firebase;
