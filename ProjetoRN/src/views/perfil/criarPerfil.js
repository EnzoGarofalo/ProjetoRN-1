import { Component } from "react"
import React, { Component} from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../../firebase/conexaoFB';


class criarPerfil extends Component{
	constructor() {
    super();.
    this.dbRef = firebase.firestore().collection('Alunos');
        this.state = {
            Nome: ' ',
            Idade: ' ',
            Técnico: ' ',
            RM: ' ',
            Série: ' ',
            isLoading: false
        };
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeUser () {
        if(this.state.Nome == '') {
            alert('Fill at least your name')
        }else{
            this.setState({
                isLoading: true,
            });
            this.dbRef.add({
                Nome:  this.state.Nome,
                Idade:  this.state.Idade,
                RM:  this.state.RM,
                Técnico: this.state.Técnico,
                Série: this.state.Série
            }).then((ReadableStreamReader))    
        }
    }
}
