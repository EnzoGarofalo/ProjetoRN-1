
import React, { Component} from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../../firebase/conexaoFB';


class criarPerfil extends Component{
	constructor() {
    super();
    this.dbRef = firebase.firestore().collection('Alunos');
        this.state = {
            nome: '',
            idade: '',
            tecnico: '',
            rm: '',
            sala: '',
            isLoading: false
        };
    }
    inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    storeUser () {
        if(this.state.nome == '') {
            alert('Fill at least your name')
        }else{
            this.setState({
                isLoading: true,
            });
            this.dbRef.add({
                nome:  this.state.nome,
                idade:  this.state.idade,
                rm:  this.state.rm,
                tecnico: this.state.tecnico,
                sala: this.state.sala
            }).then((res) => {
            this.setState({
                nome: '',
                idade: '',
                tecnico: '',
                rm: '',
                sala: '',
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
                                    placeholder={'Nome'}
                                    value={this.state.nome}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'nome')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'Idade'}
                                    value={this.state.idade}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'idade')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'RM'}
                                    value={this.state.rm}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'rm')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'Técnico'}
                                    value={this.state.tecnico}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'tecnico')}
                             />       
                        </View>
                        <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'Sala'}
                                    value={this.state.sala}
                                    onChangeText={(val) => this.inputValueUpdate(val, 'sala')}
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
    padding: 35
  },
  inputGroup: {
    flex: 1,
    padding: 0,
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
    justifyContent: 'center'
  }
})

export default criarPerfil;
