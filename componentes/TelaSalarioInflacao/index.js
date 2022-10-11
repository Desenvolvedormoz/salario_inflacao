import React from "react";
import { ScrollView } from "react-native";
import ItemComparacao from "../ItemComparacao";

export default function TelaSalarioInflacao(){
    return(
        <ScrollView>
            <ItemComparacao dadoAno ='Ano' ano='2010' textoSalario='Salário' salario='R$ 510,00' Texto='inflação' inflacao='-' dado='Crescimento ' crescimentoSalariar='5,91%'/>
            <ItemComparacao dadoAno ='Ano' ano='2011' textoSalario='Salário' salario='R$ 545,00'  Texto='inflação' inflacao='6,86%' dado='Crescimento' crescimentoSalariar='6,50%'/>
            <ItemComparacao dadoAno ='Ano' ano='2012' textoSalario='Salário' salario='R$ 622,00'  Texto='inflação' inflacao='14,13%' dado='Crescimento' crescimentoSalariar='5,84%'/>
            <ItemComparacao dadoAno ='Ano' ano='2013' textoSalario='Salário' salario='R$ 678,00'  Texto='inflação' inflacao='9,00%' dado='Crescimento' crescimentoSalariar='5,91%'/>
            <ItemComparacao dadoAno ='Ano' ano='2014' textoSalario='Salário' salario='R$ 724,00'  Texto='inflação' inflacao='6,78%' dado='Crescimento ' crescimentoSalariar='6,41%'/>
            <ItemComparacao dadoAno ='Ano' ano='2015' textoSalario='Salário' salario='R$ 788,00'  Texto='inflação' inflacao='8,84%' dado='Crescimento' crescimentoSalariar='10,67%'/>
            <ItemComparacao dadoAno ='Ano' ano='2016' textoSalario='Salário' salario='R$ 880,00'  Texto='inflação' inflacao='11,68%' dado='Crescimento' crescimentoSalariar='6,29%'/>
            <ItemComparacao dadoAno ='Ano' ano='2017' textoSalario='Salário' salario='R$ 937,00'  Texto='inflação' inflacao='6,48%' dado='Crescimento' crescimentoSalariar='2,95%'/>
            <ItemComparacao dadoAno ='Ano' ano='2018' textoSalario='Salário' salario='R$ 954,00'  Texto='inflação' inflacao='1,81%' dado='Crescimento' crescimentoSalariar='3,75%'/>
            <ItemComparacao dadoAno ='Ano' ano='2019' textoSalario='Salário' salario='R$ 998,00'  Texto='inflação' inflacao='4,61%' dado='Crescimento' crescimentoSalariar='4,31%'/>
            <ItemComparacao dadoAno ='Ano' ano='2020' textoSalario='Salário' salario='R$ 1045,00'  Texto='inflação' inflacao='4,71%' dado='Crescimento' crescimentoSalariar='4,52%'/>
        </ScrollView>
    )
}