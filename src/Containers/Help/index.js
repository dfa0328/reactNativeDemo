'use strict';

import React from 'react';
import { StyleSheet, Text, View,Alert } from 'react-native';

import {observer} from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});


export default class Help extends React.Component {
  static navigationOptions = {
    title: '帮助',
  };
  
  constructor(props){
    super(props);

  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.hello} >222</Text>
      </View>
    )

  }

}



