'use strict';

import React from 'react';
import { StyleSheet, Text, View,Alert ,Button} from 'react-native';

import {observer} from 'mobx-react/native';

import {StackNavigator} from 'react-navigation';
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


export default class Home extends React.Component {
  static navigationOptions = {
    title: '我的账户',
  };
  
  constructor(props){
    super(props);

 }

 

  render() {
   
    
   const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Text style={styles.hello} >首页</Text>

      </View>
    )

  }

}



