import TabNavigator from './src/screens/TabNavigator'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
      <TabNavigator/>
      </NavigationContainer>
    )
  }
}
