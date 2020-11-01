import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import Colors from '../styles/Colors'

import { Projetos } from '../data/Projetos'
import CardView from '../components/Cards'

import projetosFeed from '../Offiline/projetosFeed'

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      data: [
        {
          value: '',
          nome: '',
          bolsa: '',
          area: '',
          preRequisitos: '',
          horas: '',
          colaboradores: '',
          responsavel: '',
          descricao: '',
        }
      ]
    };
  }

  onValueChange(value) {
    this.setState({ value })
  }

  moreInformation = () => this.props.navigation.navigate('Projetos', { entrei: true });

  renderItem = ({ item }) => (
    <CardView item={item} onPress={this.moreInformation} />
  )

  async componentDidMount() {
    var data = await projetosFeed.set(Projetos)

    if (!data.error) {
      this.setState({ data })
    }
  }

  render() {
    return (
      <View style={styles.background}>
        <StatusBar style="auto" />

        <TextInput
          style={styles.input}
          onChangeText={text => this.onValueChange(text)}
          value={this.state.value}
          placeholder={"Pesquise áreas de interesse"}
        />

        <View style={styles.flatView}>
          <FlatList
            data={Projetos}
            renderItem={this.renderItem}
            keyExtractor={item => String(item.id)}
          />

        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({

  background: {
    backgroundColor: 'white',
    flex: 1,
    paddingHorizontal: 10,
    marginTop: 10,
  },

  input: {
    borderTopColor: Colors.darkGrey,
    borderColor: 'transparent',
    borderRadius: 10,
    marginVertical: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    flex: 1,
    maxHeight: 60,
    paddingHorizontal: 10,
  },

  flatView: {
    flex: 1,
  }
});