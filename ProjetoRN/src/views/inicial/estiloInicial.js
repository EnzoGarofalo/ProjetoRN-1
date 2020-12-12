import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
   },

   fundo: {
       width: '100%',
       height: '100%',
   },
   
   botaoContainer: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: 40,
      marginRight: 40,
      borderRadius: 5,
      height: 40,
      borderWidth: 2,
      borderColor: '#e8f2e9',
      justifyContent: 'center',
      alignItems: 'center',
   },

   borda: {
        marginTop: 130,
   },

   botaoTexto: {
      fontSize: 18,
      color: '#fff',
      fontWeight: 'bold',
   }
});

export default estiloInicial

