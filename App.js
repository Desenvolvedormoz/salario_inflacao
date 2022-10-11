import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInflacao from './componentes/TelaInflacao';
import TelaSalario from './componentes/TelaSalario';
import TelaSalarioInflacao from './componentes/TelaSalarioInflacao';
import { FontAwesome5, Fontisto } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator screenOptions={{
      headerStyle: {
        backgroundColor: '#4ff'
      },
      headerTitleAlign: 'center',
      headerTintColor: 'green',
      tabBarStyle:{
       backgroundColor: '#4ff',
       height: 60,
      },
      tabBarActiveBackgroundColor: '#ff4',
      tabBarActiveTintColor: '#4ff',
      tabBarInactiveTintColor: 'green'
    }}>
      <Tab.Screen name='Salário' component={TelaSalario}
      options={{
        tabBarIcon: ({color})=>(
          <FontAwesome5 name="hand-holding-usd" size={24} color={color} />
        )
      }}
      />
      <Tab.Screen name='Inflação' component={TelaInflacao}
      options={{
        tabBarIcon: ({color})=>(
          <Fontisto name="wallet" size={24} color={color} />
        )
      }}
      />
      <Tab.Screen name='Salário & Inflação' component={TelaSalarioInflacao}
      options={{
        tabBarIcon: ({color})=>(
          <FontAwesome5 name="balance-scale" size={24} color={color} />
        )
      }}
      />
    </Tab.Navigator>
  </NavigationContainer>
  );
}

