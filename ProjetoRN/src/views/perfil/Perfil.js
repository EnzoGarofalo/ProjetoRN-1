import React from "react";
import { Component } from "react";
import { Text, Button, View, StyleSheet, ScrollView } from "react-native";
import { ListItem } from "react-native-elements";
import firebase from "../../firebase/conexaoFB";

//Gerando uma classe filha / objeto pré construido
class Perfil extends Component {
    PerfilVoltar({ navigation }) {
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
    //componentDidMount é um HOOK têm q ser chamado dps do construtor, bom para subscrições
    componentDidMount(){
        this.unsubscribe = this.firestoreREF.onSnapshot(this.getCollection);
    }
    //é invocado imediatamente antes que um componente seja desmontado e destruído / faz uma limpeza boa 
    componentWillUnmount(){
        this.unsubscribe();
    }

    getCollection =  (querySnapshot) => {
        const userArr = [ ];
        //querrySnapshot - possui os domentsSnapshot, chamados pela query, usando um foreach
        querySnapshot.forEach((res) => {
            const {  RM, Nome, Idade, Série, Técnico} = res.data();
            userArr.push({
                key: res.id,
                res,
                RM,
                Nome,
                Idade,
                Série,
                Técnico,
            });
         });

         this.setState({
             userArr,
             isLoading: false,
         });
    }     
        //renderiza elementos
         render( ){
                if(this.state.isLoading){
                    return(
                        <View style={style.carregando}>
                        </View>
                    )
         }

         return(
             <View>
                    <Button 
                        title="Adicionar Perfil"
                        onPress={() => this.props.navigation.navigate('criarPerfil')}
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                    />
         
                     <ScrollView style={style.container}>
                        {
                            this.state.userArr.map((item,  i) => { 
                                return(
                                    <ListItem
                                        key={i}
                                        chevron
                                        bottomDivider
                                        title={item.Nome}
                                        subtitle={item.Série}
                                        onPress={() =>{
                                            this.props.navigation.navigate('consultaPerfil' , {
                                                userKey: item.key
                                            });
                                        }}/>
                                );
                            })
                        }
                    </ScrollView>
            </View>
         );
    }
}
const style= StyleSheet.create({
    container: {
     flex: 1,
     backgroundColor: '#297373'
    },
    carregando: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center'
    }
})
  
export default Perfil;
