import React, { useState } from 'react'; 
import { FlatList } from 'react-native';
import estiloItem from './estiloItem';
import { Text, View, TouchableOpacity}  from 'react-native';

function item ({ navigation }){

    const [ item, setItem]  = useState([
        {
            id: '1',
            titulo: '25 grandes gênios da humanidade',
            autor: 'Salvador Nogueira',
            descricao: 'Um livro maneiro :)'
        }
    ]);
    
    const voltar = () => {
        navigation.goBack();
    }

    

}

export default item;
