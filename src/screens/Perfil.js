import React, { Component } from 'react'
import { StatusBar, Text, View, FlatList, Image, ScrollView} from 'react-native'
import Colors from '../styles/Colors'
import CardView from '../components/Cards'
import { Projetos } from '../data/Projetos'
import { Usuarios } from '../data/Usuarios'

export default class Perfil extends Component {
  moreInformation = () => this.props.navigation.navigate('Projetos');
  renderItem = ({ item }) => (
    <CardView style={{maxWidth: 327,
      marginRight: 20}} item={item} onPress={this.moreInformation} />
  )
  render() {
    return (
      <View style={styles.background}>
        <StatusBar backgroundColor={Colors.primaryColor} />
        <View style={styles.image}>
        <Image style={{padding: 60}} source={require('../../assets/favicon.png')}/>
        </View>

        <View style={styles.infos}>
          
          <View style={{alignItems: 'space-between', flexDirection: 'row'}}>
          <Text style={styles.text}> {Usuarios[0].nome.substring(0,12)}</Text>
          <Text style={styles.text}>{Usuarios[0].matricula}</Text>
          </View>

          <Text style={styles.text}> {Usuarios[0].curso}</Text>
          <Text style={styles.text}> {Usuarios[0].areaInteresse}</Text>
        </View>

        <View style={styles.cards}>
          <FlatList
            horizontal  //mudar linha 66 Perfil.js e linha 64/65 Cards.js
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            data={Projetos}
            renderItem={this.renderItem}
            keyExtractor={item => String(item.id)}
          />
        </View>
      </View>
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
    flex: 1.3,
    paddingVertical: 30,
    alignItems: 'center',
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
    paddingRight: 5,   //caso sejam cards horizontais
  },
  text:{
    flex: 1,
    paddingLeft: 10,
    marginBottom: 10,
    marginLeft: 0,
    fontSize: 18,
    
    borderWidth: 2,
    borderColor: Colors.primaryColor,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderTopColor: "transparent",
  }
}