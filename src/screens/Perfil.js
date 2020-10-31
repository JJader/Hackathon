import React, { Component } from 'react'
import { StatusBar, Text, View, FlatList, Image, ScrollView} from 'react-native'
import Colors from '../styles/Colors'
import CardView from '../components/Cards'
import { Projetos } from '../data/Projetos'
import { Usuarios } from '../data/Projetos'

export default class Perfil extends Component {
  moreInformation = () => this.props.navigation.navigate('Projetos');
  renderItem = ({ item }) => (
    <CardView item={item} onPress={this.moreInformation} />
  )
  render() {
    return (
      <ScrollView style={styles.background}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={styles.image}>
        <Image style={{padding: 60}} source={require('../../assets/favicon.png')}/>
        </View>

        <View style={styles.infos}>
          <Text style={styles.text}> {Usuarios[0].nome}</Text>
          <Text style={styles.text}> {Usuarios[0].curso}</Text>
          <Text style={styles.text}> {Usuarios[0].areadeinteresse</Text>
        </View>

        <View style={styles.cards}>
          <FlatList
            data={Projetos}
            renderItem={this.renderItem}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </ScrollView>
    )
  }
}
const styles = {
  flatView: {
    flex: 1,
  },
  background: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  image: {
    paddingVertical: 40,
    alignItems: 'center',
  },
  infos: {
    alignItems: 'center',
  },
  cards: {
    marginTop: 20,
    paddingVertical: 8, 
    alignItems: 'center',
    paddingHorizontal: 24,
  },
  text:{
    width: 320,
    paddingLeft: 8,
    marginBottom: 5,
    fontSize: 15,
    borderWidth: 5,
    borderColor: Colors.primaryColor,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: "transparent"
  }
}