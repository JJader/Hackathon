import React, { Component } from 'react'
import { Text, View, StatusBar, Image } from 'react-native'

import Colors from '../styles/Colors';
import styles from '../styles/styles'

export default class Projetos extends Component {
  render() {
    return (
      <View>
        <View>
          <StatusBar backgroundColor={Colors.primaryColor} />
          <Text>Icone de voltar</Text>
        </View>

        <View>
          <Image
            style={styles.imagemPerfil}
            source={require("../../assets/adaptive-icon.png")}
          />
        </View>
      </View>
    )
  }
}
