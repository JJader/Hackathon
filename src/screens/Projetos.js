import React, { Component } from 'react'
import { Image, StatusBar, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import Colors from '../styles/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import projetosFeed from '../Offiline/projetosFeed'

export default class CriarProjeto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      nome: '',
      bolsa: '',
      area: '',
      preRequisitos: '',
      horas: '',
      colaboradores: '',
      responsavel: '',
      descricao: '',
    };
  }
  onValueChange(value) {
    this.setState({ value })
  }

  returnColab(colaboradores) {
    var str = ''

    for (let i = 0; i < colaboradores.length; i++) {
      str = str.concat(colaboradores[i].nome + '; ');
    }

    return str
  }

  returnPreRequisitos(preRequisitos) {
    var str = ''

    for (let i = 0; i < preRequisitos.length; i++) {
      str = str.concat(preRequisitos[i] + '; ');
    }

    return str
  }

  returnArea(area) {
    var str = ''

    for (let i = 0; i < area.length; i++) {
      str = str.concat(area[i] + ';   ');
    }
    return str
  }

  async onPress() {
    
    var data = {
      value: this.state.value,
      nome: this.state.nome,
      bolsa: this.state.bolsa,
      area: this.state.area,
      preRequisitos: this.state.preRequisitos,
      horas: this.state.horas,
      colaboradores: this.state.colaboradores,
      responsavel: this.state.responsavel,
      descricao: this.state.descricao,
    }

    await projetosFeed.add(data)

    this.props.navigation.replace('Tab')
  }

  render() {
    return (
      <ScrollView style={styles.background}>
        <StatusBar backgroundColor={Colors.primaryColor} />

        <View style={styles.imagemView}>
          <Image
            style={styles.image}
            source={require('../../assets/user.png')}
          />
          <Text style={styles.text}>Crie seu projeto</Text>
        </View>

        <View style={styles.viewText}>


          <TextInput
            style={styles.input}
            onChangeText={text => this.onValueChange(text)}
            value1={this.state.responsavel}
            placeholder={"Responsavel: "}
          />

          <TextInput
            style={styles.input}
            onChangeText={text => this.onValueChange(text)}
            value2={this.state.nome}
            placeholder={"Nome do projeto"}
          />

          <TextInput
            style={styles.scrollDescription}
            onChangeText={text => this.onValueChange(text)}
            value3={this.state.descricao}
            placeholder={"Descrição"}
          />


          <TextInput
            style={styles.input}
            onChangeText={text => this.onValueChange(text)}
            value4={this.state.bolsa}
            placeholder={"Valor da Bolsa:"}
          />

          <TextInput
            style={styles.input}
            onChangeText={text => this.onValueChange(text)}
            value5={this.state.area}
            placeholder={"Áreas de atuação"}
          />

          <TextInput
            style={styles.input}
            onChangeText={text => this.onValueChange(text)}
            value6={this.state.preRequisitos}
            placeholder={"Pré-requisitos"}
          />

          <TextInput
            style={styles.input}
            onChangeText={text => this.onValueChange(text)}
            value7={this.state.horas}
            placeholder={"Qtd. de horas: "}
          />

          <TextInput
            style={styles.input}
            onChangeText={text => this.onValueChange(text)}
            value8={this.state.colaboradores}
            placeholder={"Digite aqui quem são os colaboradores"}
          />

        </View>

        <TouchableOpacity
          onPress={async () => await this.onPress()}
          style={styles.button}
        >
          <Ionicons name="ios-add-circle" size={60} color="black" />
        </TouchableOpacity>

      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: 'white',
  },

  viewText: {
    flex: 1,
  },

  text:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30,
  },

  input: {
    flex: 1,
    fontSize: 18,
    borderWidth: 2,
    marginBottom: 15,

    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: Colors.primaryColor,
  },

  imagemView: {
    flex: 1.5,
  },

  image: {
    borderRadius: 400,
    flex: 1,
    margin: 60,
    minHeight: 200,
    minWidth: 200,
  },

  scrollDescription: {
    paddingVertical: 50,
    fontSize: 18
  },

  button: {
    flex: 1,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 40,
  },
})
