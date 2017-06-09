'use strict';

import React from 'react';
import {StyleSheet, Text, View, Button, Alert ,Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    height:50,
  },
  hello: {
    fontSize: 20,
    textAlign:'center',
    height:80,
    lineHeight:80,
  },
});

export default class HeaderBar extends React.Component {

  static propsType = {
        title:React.PropTypes.string,
  }

  constructor(props){
      super(props)
  }

  onBack =()=>{
      
  }

  render() {

    return (
      <View style={styles.container} >
        <Text style={styles.hello} >{this.props.title}</Text>
      </View>
    )

  }

}

