import { StyleSheet } from 'react-native';

const estiloInicial = StyleSheet.create({
   container: {   
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',     
      backgroundColor: '#EDF2F4',
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
      padding: 40,
      paddingLeft: 80,
      paddingRight: 80,
      borderColor: '#DCE0D9',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#4361EE',
   },

   borda: {
        marginTop: 130,
   },

   botaoTexto: {
      fontSize: 18,
      color: '#DCE0D9',
      fontWeight: 'bold',
   },
});

export default estiloInicial

