import React from "react";
import { Component } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "../../firebase/conexaoFB";

//Gerando uma classe filha / objeto pré construido
class perfil extends Component {
    voltar({ navigation }) {
        () => {
            navigation.goBack();
        };
    }
//construtor
	constructor() {
        //acessar o objeto pai:
        super();
        this.firestoreREF = firebase.firestore().collection('Alunos');
        this.state ={ 
            isLoading: true,
            userArr: [ ]
        };
    }
    componentDidMount(){
        this.unsubscribe = this.firestoreREF.onSnapshot(this.getCollection);
    }
    componentWillUnmount(){
        this.unsubscribe();
    }

    getCollection =  (querySnapshot) => {
        const userArr = [ ]
    }
}
