
import React, { Component} from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../../firebase/conexaoFB';


class criarPerfil extends Component{
	constructor() {
    super();
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
            }).then((res) => {
            this.setState({
                Nome:  '',
                Idade:  ' ',
                RM:  ' ',
                Técnico: ' ',
                Série: ' ',
                isLoading: false,
            });
            this.props.navigation.navigate('Perfil')
            })
            .catch((err) => {
                console.error("Error found: ", err);
                this.setState({
                  isLoading: false,   
                });
            });
        }
    }

    render(){
        if(this.state.isLoading){
            return(
              <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#9E9E9E"/>
              </View>
            )
          }
            return(
                <ScrollView style={styles.container}>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'nome'}
                                    value={this.state.Nome}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'Nome')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'Idade'}
                                    value={this.state.Idade}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'Idade')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'RM'}
                                    value={this.state.RM}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'RM')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'Técnico'}
                                    value={this.state.Técnico}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'Técnico')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'Série'}
                                    value={this.state.Série}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'Série')}
                             />       
                        </View>
                        <View style={styles.button}>
                            <Button
                                    title='Adicionar Perfil'
                                    onPress={() => this.storeUser()} 
                                    color="#19AC52"
                             />
                        </View>
                </ScrollView>
            );
        }
    }   
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
    backgroundColor: '#00171F',
    color: '#fff',
    fontSize: 15
  },
  inputGroup: {
    flex: 1,
    padding: 25,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#cccccc',
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default criarPerfil;
