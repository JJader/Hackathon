import React, { Component } from 'react'
import { StatusBar, StyleSheet, Text, View, FlatList, TextInput } from 'react-native'
import Colors from '../styles/Colors'

import { Projetos } from '../data/Projetos'
import CardView from '../components/Cards'

export default class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  onValueChange(value) {
    this.setState({ value })
  }

  moreInformation = () => this.props.navigation.navigate('Projetos');

  renderItem = ({ item }) => (
    <CardView style={{marginRight: 20}} item={item} onPress={this.moreInformation} />
  )

  render() {
    return (
      <View style={styles.background}>
        <StatusBar style="auto" />

        <TextInput
          style={styles.input}
          onChangeText={text => this.onValueChange(text)}
          value={this.state.value}
          placeholder={"PESQUISAR"}
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
    flex: 1,
    marginHorizontal: 10,
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