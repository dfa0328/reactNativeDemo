'use strict';

import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View
} from 'react-native';
import {
    StackNavigator,
} from 'react-navigation';
import {observer} from 'mobx-react/native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  header: {
    fontSize: 16,
    textAlign: 'center',
    paddingTop:30,
    paddingBottom:12,
    backgroundColor:'#09bb63',
    color:'#fff',

  },
});


export default class Course extends React.Component {
  static navigationOptions = {
    title: '我的课程',
  };
  
  constructor(props){
    super(props);

  }

  render() {


    return (
      <View style={styles.container}>
        <Text style={styles.header} >我的课程</Text>
        <View>
        
        </View>

      </View>
    )

  }

}



