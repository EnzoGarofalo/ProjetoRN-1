import React, { useState } from 'react';
import estiloLista from './estiloLista';
import {Text, View} from 'react-native';
import item from '../views/item/item';

const Lista = ({data}) => {

    const [ item, setItem] = useState(data);

    return(
        <View style={estiloLista.container}>
            <Text style={estiloLista.titulo}>{item.titulo}</Text>

            <Text style={estiloLista.autor}> {item.autor}</Text>
        </View>
    )
}

export default Lista;
