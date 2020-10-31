import React, { Component } from 'react'
import { Image, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import Colors from '../styles/Colors'
import { Projetos } from '../data/Projetos'

export default class CriarProjeto extends Component {

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
          <Text style={styles.text}>Responsavel: {Projetos[0].responsavel}</Text>

          <Text style={styles.text}>{Projetos[0].nome}</Text>

          <Text style={styles.text}>Descrição do projeto</Text>
          <ScrollView style={styles.scrollDescription}>
            <Text>{Projetos[0].descricao}</Text>
          </ScrollView>

          <Text style={styles.text}>Bolsa: {Projetos[0].bolsa} </Text>

          <Text style={styles.text}>Area: {Projetos[0].area} </Text>

          <Text style={styles.text}>Pre-requisitos: {
            this.returnPreRequisitos(Projetos[0].preRequisitos)
          }
          </Text>

          <Text style={styles.text}>Qtd. de horas: {Projetos[0].horas} </Text>

          <Text style={styles.text}>Colaboradores: {
            this.returnColab(Projetos[0].colaboradores)
          }
          </Text>
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
    flex: 1
  },

  text: {
    fontSize: 18,
    fontWeight: 'bold',
    borderWidth: 2,

    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: Colors.primaryColor,

    marginVertical: 8,

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
    borderColor: Colors.primaryColor,
    borderWidth: 7
  },

  scrollDescription: {
    minHeight: 150
  }
})
