import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInflacao from './componentes/TelaInflacao';
import TelaSalario from './componentes/TelaSalario';
import TelaSalarioInflacao from './componentes/TelaSalarioInflacao';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator>
      <Tab.Screen name='Salário' component={TelaSalario}/>
      <Tab.Screen name='Inflação' component={TelaInflacao}/>
      <Tab.Screen name='Salário & Inflação' component={TelaSalarioInflacao}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}

