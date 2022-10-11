import React from "react";
import { ScrollView, View } from "react-native";
import ItemValor from "../ItemValor";

export default function TelaSalario(){
    return(
        <ScrollView>
        <View>
            <ItemValor texto='Ano' ano='2010' textoSalario='Salário' salario='R$ 510,00'/>
            <ItemValor texto='Ano' ano='2011'  textoSalario='Salário' salario='R$ 545.00'/>
            <ItemValor texto='Ano' ano='2012'  textoSalario='Salário' salario='R$ 622,00'/>
            <ItemValor texto='Ano' ano= '2013'  textoSalario='Salário'  salario='R$ 678,00'/>
            <ItemValor texto='Ano' ano= '2014'  textoSalario='Salário'  salario='R$ 724,00'/>
            <ItemValor texto='Ano' ano= '2015'  textoSalario='Salário'  salario='R$ 788,00'/>
            <ItemValor texto='Ano' ano= '2016'  textoSalario='Salário'  salario='R$ 880,00'/>
            <ItemValor texto='Ano' ano= '2017'  textoSalario='Salário'  salario='R$ 937,00'/>
            <ItemValor texto='Ano' ano= '2018'  textoSalario='Salário'  salario='R$ 954,00'/>
            <ItemValor texto='Ano' ano= '2019'  textoSalario='Salário'  salario='R$ 998,00'/>
            <ItemValor texto='Ano' ano= '2020'  textoSalario='Salário'  salario='R$ 1045,00'/>
        </View>
        </ScrollView>
    )
}