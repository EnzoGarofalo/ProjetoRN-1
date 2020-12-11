import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// dependencias de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


// Fornece um caminho para o seu app transitar entre telas, cada nova tela é colocada no topo da pilha
const Stack = createStackNavigator();

export default function App() {
  return (
      //É o responsavel por manipular o estado do app e conectar o 'navigator' com o ambiente do app:
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={inicial}/>
                <Stack.Screen name="Item" component={item}/>
                <Stack.Screen name="Perfil" component={perfil}/>
            </Stack.Navigator>
    </NavigationContainer>
    );
}
