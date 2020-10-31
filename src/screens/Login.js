import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

export default class Login extends Component {
  render() {
    return (
      <View>
        <Button
        title="Go to Settings"
        onPress={() => this.props.navigation.replace('Tab')}
      />
      </View>
    )
  }
}
