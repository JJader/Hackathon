import React, { Component } from 'react'
import { Text, View, TextInput, StatusBar, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Image } from 'react-native'

import Colors from '../styles/Colors'

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      password: '',
    };
  }

  onUserChange(user) {
    this.setState({ user })
  }

  onPassChange(password) {
    this.setState({ password })
  }

  render() {
    return (
      <View style={styles.background}>
        <StatusBar hidden />

        <KeyboardAvoidingView style={{ flex: 4 }} behavior="padding" enabled>

          <View style={styles.imagemView}>
            <Image
              style={styles.image}
              resizeMode={"contain"}
              source={require('../../assets/logo.png')}
            />
          </View>

          <View style={styles.inputView}>
            <TextInput
              style={styles.input}
              onChangeText={text => this.onUserChange(text)}
              value={this.state.user}
              placeholder={"Usuário"}
            />

            <TextInput
              style={styles.input}
              onChangeText={text => this.onPassChange(text)}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={"Senha"}
            />
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          onPress={() => this.props.navigation.replace('Tab')}
          style={styles.button}
        >
          <Text style={styles.text}>Entrar</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.primaryColor,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },

  inputView: {
    flex: 1,
    alignItems: 'stretch',
  },

  input: {
    borderColor: Colors.primaryColor,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 7,
    backgroundColor: 'white',
    borderWidth: 1,
    flex: 1,
    maxHeight: 60,
    paddingLeft: 20
  },

  button: {
    flex: 1,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 40,
    maxHeight: 70,
  },

  text: {
    color: Colors.lightGrey,
    fontSize: 20,
  },

  imagemView: {
    justifyContent:"space-around",
    alignItems:'center',
    flex: 2,
  },

  image: {
    flex: 0.7,
  }
})
