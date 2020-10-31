import React, { Component } from 'react'
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import Colors from '../styles/Colors';

import MoreInfoData from '../Offiline/moreInfo'


function doTruncarStr(str) {
  var size = 150

  if (str == undefined) {
    return str;
  }

  var shortText = str;
  if (str.length >= size) {
    shortText = str.substring(0, size).concat('...');
  }
  return shortText;
}

async function clickButton(item, onPress){
  await MoreInfoData.set(item)
  return onPress()
}

const CardView = ({ item, onPress, style }) => (
  <View style={[styles.card,style]}>

    <View style={styles.textView}>
      <Text style={styles.title}>{item.nome}</Text>
      <Text>{item.responsavel}</Text>
      <Text style={styles.description}>{doTruncarStr(item.descricao)}</Text>
    </View>

    <TouchableOpacity style={styles.informaçoes} onPress={async() => await clickButton(item,onPress)}>
      <Text style={styles.textInfo}>Mais informações</Text>
    </TouchableOpacity>

  </View>
);

export default CardView

const styles = StyleSheet.create({
  title: {
    fontSize: 22,
  },

  textView: {
    flex: 5,
    paddingHorizontal: 20,
    justifyContent: "space-around",
    marginBottom:10,
  },

  description: {
    textAlign:"justify",
    paddingTop: 5,
    fontSize: 17,
  },

  card: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: Colors.primaryColor,
    borderRadius: 10,
    flex: 1,
    marginBottom: 20,
    minHeight: 160,
    justifyContent: 'space-between'
  },

  informaçoes: {
    flex: 1,
    backgroundColor: Colors.primaryColor,
    opacity: 0.4,
    justifyContent: 'center',
  },

  textInfo: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15,
  }

});