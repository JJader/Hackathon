import React, { Component } from 'react'
import { StatusBar, Text, View, FlatList, Image, ScrollView, StyleSheet } from 'react-native'
import Colors from '../styles/Colors'
import CardView from '../components/Cards'
import { Projetos } from '../data/Projetos'
import { Usuarios } from '../data/Usuarios'

export default class Perfil extends Component {

  moreInformation = () => this.props.navigation.navigate('Projetos');

  renderItem = ({ item }) => (
    <CardView style={{
      maxWidth: 327,
      marginRight: 20
    }} item={item} onPress={this.moreInformation} />
  )

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

        <View style={styles.imageView}>
          <Image style={styles.image} source={require('../../assets/user.png')} />
        </View>

        <View style={styles.infos}>

          <View style={styles.ButtonText}>
            <Text style={[styles.text, {flex: 2}]}>{Usuarios[0].nome.substring(0, 12)}</Text>
            <Text style={styles.text}>{Usuarios[0].matricula}</Text>
          </View>

          <Text style={styles.text}>{Usuarios[0].curso}</Text>
          <Text style={styles.text}>{this.returnArea(Usuarios[0].areaInteresse)}</Text>

        </View>

        <View style={styles.cards}>
          <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Projetos}
            renderItem={this.renderItem}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  
  ButtonText: {
    flex:1,
    flexDirection: 'row',
    alignContent: 'space-between'
  },

  background: {
    flex: 1,
    backgroundColor: 'white',
  },

  imageView: {
    alignItems: 'center',
    marginVertical: 20,
  },

  image: {
    borderRadius: 400,
    flex: 1,
    minHeight: 200,
    minWidth: 200,
    borderColor: Colors.primaryColor,
    borderWidth: 7
  },

  infos: {
    flex: 1,
    alignItems: 'stretch',
    marginHorizontal: 25,

  },

  cards: {
    flex: 2,
    marginTop: 50,
    paddingVertical: 8,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingRight: 5,
  },

  text: {
    flex: 1,
    paddingLeft: 10,
    marginBottom: 10,
    fontSize: 18,

    borderWidth: 2,
    borderColor: Colors.primaryColor,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: "transparent",
  }
})