import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";

export default function ItemComparacao(props){
    return(
        <View style={estilos.container}>
            <View style={estilos.descricao}>
                 <Text>{props.dadoAno}</Text>
                 <Text>{props.textoSalario}</Text>
                 <Text>{props.Texto}</Text>
                 <Text>{props.dado}</Text>
            </View>
           <View style={estilos.numeros}>
            <Text>{props.ano} </Text>
            <Text>{props.salario}</Text>
            <Text>{props.inflacao}</Text>  
            <Text>{props.crescimentoSalariar}</Text>
            </View>
        </View>
    )
}