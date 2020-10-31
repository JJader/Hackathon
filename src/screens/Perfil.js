import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import Colors from '../styles/Colors'

export default class Perfil extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <Text> Perfil </Text>
      </View>
    )
  }
}
