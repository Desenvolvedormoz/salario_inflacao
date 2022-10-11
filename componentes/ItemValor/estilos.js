import { StyleSheet } from "react-native";

const estilos = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      padding: 10
    },
    descricao: {
        flexDirection: 'row',
        width: '100%',
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flex: 1,
        backgroundColor: '#fe4'
    },
    numeros:{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#4ed',
        padding: 20
    },
    texto: {
        paddingHorizontal: 20,
        fontSize: 20,
        fontWeight: '900'
    }
})
export default estilos;