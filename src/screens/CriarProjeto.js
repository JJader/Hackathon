import React, { Component } from 'react'
import { Image, StatusBar, StyleSheet, Text, View, ScrollView } from 'react-native'
import Colors from '../styles/Colors'
import { Projetos } from '../data/Projetos'

import MoreInfoData from '../Offiline/moreInfo'

export default class CriarProjeto extends Component {
  constructor() {
    super();
    this.state = {
      data: {
        nome: '',
        bolsa: '',
        area: '',
        preRequisitos: '',
        horas: '',
        colaboradores: '',
        responsavel: '',
        descricao: '',
      }

    }
  }

  async componentDidMount() {
    console.log("Estou aqui")
    var data = await MoreInfoData.get()

    if (!data.error) {
      this.setState({ data })
    }
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
          <Text style={styles.text}>Responsavel: {this.state.data.responsavel}</Text>

          <Text style={styles.text}>{this.state.data.nome}</Text>

          <Text style={styles.text}>Descrição do projeto</Text>
          <ScrollView style={styles.scrollDescription}>
            <Text>{this.state.data.descricao}</Text>
          </ScrollView>

          <Text style={styles.text}>Bolsa: {this.state.data.bolsa} </Text>


          <Text style={styles.text}>Area: {this.state.data.area} </Text>

          <Text style={styles.text}>Pre-requisitos: {
            this.returnPreRequisitos(this.state.data.preRequisitos)
          }
          </Text>

          <Text style={styles.text}>Qtd. de horas: {this.state.data.horas} </Text>

          <Text style={styles.text}>Colaboradores: {
            this.returnColab(this.state.data.colaboradores)
          }
          </Text>
        
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
