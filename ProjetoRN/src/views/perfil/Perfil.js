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
            const { Idade, Nome, RM, Série, Técnico} = res.data();
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
                    <Button>
                        
                    </Button>


             </View>
         )

    }
}
