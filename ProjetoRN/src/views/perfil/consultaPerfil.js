import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../../firebase/conexaoFB';

class consultaPerfil extends Component {

    constructor() {
        super();
        this.state = {
         Nome: ' ',
         Idade: ' ',
         Técnico: ' ',
         RM: ' ',
         Série: ' ',
          isLoading: true
        };
      }
     
      componentDidMount() {
        const dbRef = firebase.firestore().collection('Alunos').doc(this.props.route.params.userkey)
        dbRef.get().then((res) => {
          if (res.exists) {
            const user = res.data();
            this.setState({
              key: res.id,
              Nome: user.Nome,
              Idade: user.Idade,
              Técnico: user.Técnico,
              RM: user.RM,
              Série: user.Série,
              isLoading: false
            });
          } else {
            console.log("Document does not exist!");
          }
        });
      }
    
      inputValueUpdate = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
    
      updateUser() {
        this.setState({
          isLoading: true,
        });
        const updateDBRef = firebase.firestore().collection('Alunos').doc(this.state.key);
        updateDBRef.set({
            Nome:  this.state.Nome,
            Idade:  this.state.Idade,
            RM:  this.state.RM,
            Técnico: this.state.Técnico,
            Série: this.state.Série
        }).then((docRef) => {
          this.setState({
            key: '',
            Nome:  '',
            Idade:  ' ',
            RM:  ' ',
            Técnico: ' ',
            Série: ' ',
            isLoading: false,
          });
          this.props.navigation.navigate('Perfil');
        })
        .catch((error) => {
          console.error("Error: ", error);
          this.setState({
            isLoading: false,
          });
        });
      }
    
      deleteUser() {
        const dbRef = firebase.firestore().collection('Alunos').doc(this.props.route.params.userkey)
          dbRef.delete().then((res) => {
              console.log('Item removed from database')
              this.props.navigation.navigate('Perfil');
          })
      }
        
      render() {
        if(this.state.isLoading){
          return(
            <View style={styles.preloader}>
              <ActivityIndicator size="large" color="#9E9E9E"/>
            </View>
          )
        }
        return (
          <ScrollView style={styles.container}>
            <View style={styles.inputGroup}>
                            <TextInput 
                                    placeholder={'Nome'}
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
            <View style={styles.button}>
              <Button
                title='Update'
                onPress={() => this.updateUser()} 
                color="#19AC52"
              />
              </View>
             <View>
              <Button
                title='Delete'
                onPress={() => this.deleteUser()}
                color="#ff0000"
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
      },
      button: {
        marginBottom: 7, 
      }
    })

export default consultaPerfil;
