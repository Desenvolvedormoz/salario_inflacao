import { StyleSheet } from "react-native";

const estilos=StyleSheet.create({
    container: {
        padding: 10,
        flex: 1
    },
    descricao: {
        flexDirection: 'row',
        alignItems: "center",
        padding: 20,
        backgroundColor: '#4ff',
        justifyContent: 'space-between'
    },
    numeros: {
        width: '100%',
        flexDirection: 'row',
        alignItems: "center",
        padding: 20,
        backgroundColor: '#ff4',
        justifyContent: 'space-between'
    }
});
export default estilos;