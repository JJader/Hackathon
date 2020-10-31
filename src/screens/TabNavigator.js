// Margem cor
// Icone cortado

import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import CriarProjetos from './Projetos'
import Login from './Login'
import Feed from './Feed'
import Perfil from './Perfil'
import Projeto from './CriarProjeto'

import Colors from '../styles/Colors'

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function StackSeeProject() {

  return (
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="SeeProject"
        component={Feed}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Projetos"
        component={Projeto}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  )

}

function TabNavigator() {
  return (
    <Tab.Navigator
      barStyle={{
        backgroundColor: 'white',
        borderTopWidth: 2,
        borderColor: Colors.primaryColor

      }}
    >

      <Tab.Screen
        name="CriarProjeto"
        component={CriarProjetos}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box" color={color} size={30} />
          )
        }}
      />

      <Tab.Screen
        name="Feed"
        component={StackSeeProject}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={30} />
          )
        }}
      />

      <Tab.Screen
        name="Perfil"
        component={Perfil}
        options={{
          tabBarLabel: false,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={30} />
          )
        }}

      />

    </Tab.Navigator>
  );
}

export default function StackNavigator() {

  return (
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{
          headerShown: false
        }}
      />

    </Stack.Navigator>
  )

}


