import React, { Component } from 'react'
import { Image, StatusBar, StyleSheet, Text, View, ScrollView, TextInput } from 'react-native'
import Colors from '../styles/Colors'
import { Projetos } from '../data/Projetos'

export default class CriarProjeto extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
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

  render() {
    return (
      <ScrollView style={styles.background}>
        <StatusBar backgroundColor={Colors.primaryColor} />

        <View style={styles.imagemView}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://reactnative.dev/img/tiny_logo.png',
            }}
          />
        </View>

        <View style={styles.viewText}>
           
            <View style={styles.viewaux}>  
              <Text style={styles.text}>Responsavel: </Text>
              <TextInput
              style={styles.input}
              onChangeText={text => this.onValueChange(text)}
              value1={this.state.value}
              placeholder={"Digite aqui"}
            />
          </View>

          <TextInput
              style={styles.input}
              onChangeText={text => this.onValueChange(text)}
              value2={this.state.value}
              placeholder={"Digite aqui o nome do projeto"}
            />
          <Text style={styles.text}>Descrição do projeto</Text>
          <TextInput
              style={{paddingVertical: 50, fontSize: 18}}
              onChangeText={text => this.onValueChange(text)}
              value3={this.state.value}
              placeholder={"Digite aqui a descrição do projeto"}
            />

            <View style={styles.viewaux}>  
            <Text style={styles.text}>Bolsa: </Text>
              <TextInput
              style={styles.input}
              onChangeText={text => this.onValueChange(text)}
              value4={this.state.value}
              placeholder={"Digite aqui o valor da bolsa"}
            />
          </View>

          <TextInput
              style={styles.input}
              onChangeText={text => this.onValueChange(text)}
              value5={this.state.value}
              placeholder={"Digite aqui as áreas de atuação"}
            />

            <TextInput
              style={styles.input}
              onChangeText={text => this.onValueChange(text)}
              value6={this.state.value}
              placeholder={"Digite aqui os pré-requisitos do projeto"}
            />
           <View style={styles.viewaux}>  
              <Text style={styles.text}>Qtd. de horas: </Text>
              <TextInput
              style={styles.input}
              onChangeText={text => this.onValueChange(text)}
              value7={this.state.value}
              placeholder={"Digite aqui o valor da bolsa"}
            />
           </View>
           <TextInput
              style={styles.input}
              onChangeText={text => this.onValueChange(text)}
              value8={this.state.value}
              placeholder={"Digite aqui quem são os colaboradores"}
            />
        </View>
        <View>
      </View>
    </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    marginHorizontal: 20
  },

  viewText: {
    flex: 1,
  },

  text: {
    fontSize: 18,
    borderWidth: 2,

    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: Colors.primaryColor,
    marginVertical: 8,


  },
  input:{
    flex: 1,
    fontSize: 18,
    borderWidth: 2,

    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: Colors.primaryColor,
  },
  viewaux:{
    flexDirection: 'row',
    alignItems: 'center',
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
    minHeight: 150,
  }
})
