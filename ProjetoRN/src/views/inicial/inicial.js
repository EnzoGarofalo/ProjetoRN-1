// useState é um HOOK, recurso do RN, no caso é usado para preservar valores de qlqr tipo, sem  classes
import React, { useState } from 'react'; 
import estiloInicial from './estiloInicial';
import { Text, View, TouchableOpacity} from 'react-native';

function inicial ({ navigation }){
        
    const abrirPerfil = ( ) => {
            navigation.navigate('perfil');
        }
     
     const abrirItem = () => {
         navigation.navigate('item');
     }   

     return(

        <View style={estiloInicial.container}>
            <View style={estiloInicial.borda}>
    
                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirPerfil}>
                        <Text style={estiloInicial.botaoTexto}>Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity style={estiloInicial.botaoContainer} onPress={abrirItem}>
                        <Text style={estiloInicial.botaoTexto}>Item</Text>
                </TouchableOpacity>
            
            </View>
        </View>
     )
}
export default inicial;
