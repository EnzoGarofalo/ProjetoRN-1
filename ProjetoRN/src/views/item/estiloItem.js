import { StyleSheet } from 'react-native';

const estiloItem = StyleSheet.create({
   container: {   
      flex: 1,  
   },

    header: {
        height: 40,
        backgroundColor: '#14417b',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
   },

   texto: {
      fontSize: 20,
      color: '#FFFFFF',
      fontWeight: 'bold',
      textAlign: "center",
      padding: 10
   },
});

export default estiloItem;
