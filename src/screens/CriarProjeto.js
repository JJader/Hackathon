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
      str = str.concat(area[i] + '; ');
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
            source={require('../../assets/user.png')}
          />
        </View>

        <View style={styles.viewText}>
          <Text style={styles.text}>Responsavel: <Text style={styles.text2}>{this.state.data.responsavel}</Text> </Text>

          <Text style={styles.text}>{this.state.data.nome}</Text>

          <Text style={[styles.text,{borderWidth: 0, marginVertical: 0}]}>Descrição do projeto</Text>
          <ScrollView style={styles.scrollDescription}>
            <Text style={[styles.text,{fontSize: 18, lineHeight: 27}]}>{this.state.data.descricao}</Text>
          </ScrollView>

          <Text style={styles.text}>Bolsa: <Text style={styles.text2}>{this.state.data.bolsa}</Text> </Text>


          <Text style={styles.text}>Area: <Text style={styles.text2}>{this.returnArea(this.state.data.area)}</Text> </Text>

          <Text style={styles.text}>Pre-requisitos: <Text style={styles.text2}>{
            this.returnPreRequisitos(this.state.data.preRequisitos)
          }</Text>
          </Text>

          <Text style={styles.text}>Qtd. de horas: <Text style={styles.text2}>{this.state.data.horas}</Text> </Text>

          <Text style={styles.text}>Colaboradores: <Text style={styles.text2}>{
            this.returnColab(this.state.data.colaboradores)
          }
          </Text>
          </Text>
        
        </View>

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
    flex: 1
  },

  text: {
    
    color: Colors.darkGrey,
    fontSize: 22,
    borderWidth: 2,

    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderColor: Colors.primaryColor,

    marginVertical: 20,
    paddingVertical: 5,

  },
  text2: {
    fontSize: 18,
    lineHeight: 23,
  
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
