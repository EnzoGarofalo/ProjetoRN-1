import React, { Component } from 'react';
import { Alert, Button, StyleSheet, TextInput, ScrollView, ActivityIndicator, View } from 'react-native';
import firebase from '../../firebase/conexaoFB';

class consultaPerfil extends Component {

    constructor() {
        super();
        this.state = {
          nome: '',
          sala: '',
          turma: '',
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
              nome: user.nome,
              sala: user.sala,
              turma: user.turma,
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
          nome: this.state.nome,
          sala: this.state.sala,
          turma: this.state.turma,
        }).then((docRef) => {
          this.setState({
            key: '',
            nome: '',
            sala: '',
            turma: '',
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
                  placeholder={'nome'}
                  value={this.state.nome}
                  onChangeText={(val) => this.inputValueUpdate(val, 'nome')}
              />
            </View>
            <View style={styles.inputGroup}>
              <TextInput
                  placeholder={'sala'}
                  value={this.state.sala}
                  onChangeText={(val) => this.inputValueUpdate(val, 'sala')}
              />
            </View>
            <View style={styles.inputGroup}>
              <TextInput
                  placeholder={'turma'}
                  value={this.state.turma}
                  onChangeText={(val) => this.inputValueUpdate(val, 'turma')}
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
