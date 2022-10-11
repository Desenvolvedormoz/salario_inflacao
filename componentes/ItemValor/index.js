import React from "react";
import { View, Text } from "react-native";

export default function ItemValor(props){
    return(
        <View>
            <Text>{props.ano}</Text>
            <Text>{props.salario}</Text>  
            <Text>{props.inflacao}</Text>
        </View>
    )
}