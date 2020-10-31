import React, { Component } from 'react'
import { StatusBar, Text, View } from 'react-native'
import Colors from '../styles/Colors'

export default class Feed extends Component {
  render() {
    return (
      <View>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <Text> FEED </Text>
      </View>
    )
  }
}
