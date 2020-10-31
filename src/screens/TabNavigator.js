import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Scree from './Projetos'

const Tab = createBottomTabNavigator();

export default class TabNavigation extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Scree} />
      </Tab.Navigator>
    );
  }
}
