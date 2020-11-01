import React, { Component } from 'react'
import { Text, View, TextInput, StatusBar, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Image } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
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
              style={styles.inputBox}
              onChangeText={text => this.onUserChange(text)}
              value={this.state.user}
              placeholder={"Usuário"}
            />

            <TextInput
              style={styles.inputBox}
              onChangeText={text => this.onPassChange(text)}
              value={this.state.password}
              secureTextEntry={true}
              placeholder={"Senha"}
            />
            <Text style={styles.text}>Cadastrar</Text>
          </View>
        </KeyboardAvoidingView>

        <TouchableOpacity
          onPress={() => this.props.navigation.replace('Tab')}
          style={styles.button}
        >
          <AntDesign name="arrowright" size={30} color="black" />
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

  inputBox: {
    borderColor: Colors.primaryColor,
    marginHorizontal: 40,
    marginVertical: 10,
    borderRadius: 7,
    backgroundColor: 'white',
    borderWidth: 1,
    flex: 1,
    maxHeight: 60,
    paddingLeft: 20,
  },

  button: {
    flex: 1,
    borderRadius: 90,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 100,
    minWidth: 70,
    maxWidth: 70,
    maxHeight: 70,
  },
  text: {
    flex: 1,
    paddingHorizontal: 40,
    fontSize: 18,
    color: 'white',
    paddingBottom: 0,
  },

  textInput: {
    color: Colors.lightGrey,
    fontSize: 20,
  },
  
  imagemView: {
    justifyContent:"space-around",
    alignItems:'center',
    flex: 2,
  },

  image: {
    flex: 0.4,
  }
})
