import React from 'react';
// dependencias de navegação
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

//Dependencias de Screens
import inicial from './src/views/inicial/inicial.js';
import item from './src/views/item/item.js';
import perfil from './src/views/perfil/Perfil.js';
import consultarPerfil from './src/views/perfil/consultaPerfil.js';
import criarPerfil from './src/views/perfil/criarPerfil.js';

// Fornece um caminho para o seu app transitar entre telas, cada nova tela é colocada no topo da pilha
const Stack = createStackNavigator();

export default function App() {
  return (
      //É o responsavel por manipular o estado do app e conectar o 'navigator' com o ambiente do app:
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="inicial" component={inicial}/>
                <Stack.Screen name="item" component={item}/>
                <Stack.Screen name="perfil" component={perfil}/>
                <Stack.Screen name="consultar Perfil" component={consultarPerfil}/>
                <Stack.Screen name="criar Perfil" component={criarPerfil}/>
            </Stack.Navigator>
    </NavigationContainer>
    );
}
