import React from "react";
import { ScrollView } from "react-native";
import ItemValor from "../ItemValor";

export default function TelaInflacao(){
    return(
        <ScrollView>
           <ItemValor ano='2010' inflacao='5,91%'/>
           <ItemValor ano='2011' inflacao='6,50%'/>
           <ItemValor ano='2012' inflacao='5,84%'/>
           <ItemValor ano='2013' inflacao='5,91%'/>
           <ItemValor ano='2014' inflacao='6,41%'/>
           <ItemValor ano='2015' inflacao='10,67%'/>
           <ItemValor ano='2016' inflacao='6,29%'/>
           <ItemValor ano='2017' inflacao='2,95%'/>
           <ItemValor ano='2018' inflacao='3,75%'/>
           <ItemValor ano='2019' inflacao='4,31%'/>
           <ItemValor ano='2020' inflacao='4,52%'/>
        </ScrollView>
    )
}