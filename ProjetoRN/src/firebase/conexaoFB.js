// dependencias  do banco de dados
import firebase from 'firebase';
import 'firebase/firestone';

//Config. Firebase
const configFirebase = {
    apiKey: "AIzaSyC66Z6POaPqAHtgpRy3R6-V6FOSanNGqqw",
    authDomain: "projetorn-fb-f06c2.firebaseapp.com",
    projectId: "projetorn-fb-f06c2",
    storageBucket: "projetorn-fb-f06c2.appspot.com",
    messagingSenderId: "969232692896",
    appId: "1:969232692896:web:4c76f817650bd841127bc5",
    measurementId: "G-QYJE5KDBJV",
};
//inicializa o fb
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;
