import React from "react";
import { View, Text } from "react-native";
import estilos from "./estilos";

export default function ItemValor(props){
    return(
        <View style={estilos.container}>
            <View style={estilos.descricao}>
                <Text style={estilos.texto}>{props.texto}</Text>
                <Text style={estilos.texto}>{props.textoSalario}</Text> 
                <Text style={estilos.texto}>{props.textoInflacao}</Text >
            </View>
            <View style={estilos.numeros}>
                <Text style={estilos.texto}>{props.ano}</Text>
                <Text style={estilos.texto}>{props.salario}</Text>
                <Text style={estilos.texto}>{props.inflacao}</Text>
            </View>
                  
        </View>
    )
}