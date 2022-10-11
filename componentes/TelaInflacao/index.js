import React from "react";
import { ScrollView } from "react-native";
import ItemValor from "../ItemValor";

export default function TelaInflacao(){
    return(
        <ScrollView>
           <ItemValor texto='Ano' ano='2010' textoInflacao='Inflação' inflacao='5,91%'/>
           <ItemValor texto='Ano' ano='2011' textoInflacao='Inflação' inflacao='6,50%'/>
           <ItemValor texto='Ano' ano='2012' textoInflacao='Inflação' inflacao='5,84%'/>
           <ItemValor texto='Ano' ano='2013' textoInflacao='Inflação' inflacao='5,91%'/>
           <ItemValor texto='Ano' ano='2014' textoInflacao='Inflação' inflacao='6,41%'/>
           <ItemValor texto='Ano' ano='2015' textoInflacao='Inflação' inflacao='10,67%'/>
           <ItemValor texto='Ano' ano='2016' textoInflacao='Inflação' inflacao='6,29%'/>
           <ItemValor texto='Ano' ano='2017' textoInflacao='Inflação' inflacao='2,95%'/>
           <ItemValor texto='Ano' ano='2018' textoInflacao='Inflação' inflacao='3,75%'/>
           <ItemValor texto='Ano' ano='2019' textoInflacao='Inflação' inflacao='4,31%'/>
           <ItemValor texto='Ano' ano='2020' textoInflacao='Inflação' inflacao='4,52%'/>
        </ScrollView>
    )
}