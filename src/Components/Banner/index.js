'use strict';

import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image,
    ScrollView
} from 'react-native';

const styles = StyleSheet.create({
  banner:{
    flex: 1,
    height:130,
    resizeMode:'stretch'
  },
  imgList:{
    height:130,
  }
});

 const BannerImg=[
  require('./images/ban1.jpg'),
  require('./images/ban2.jpg'),
  require('./images/ban3.jpg'),
  require('./images/ban4.jpg'),
]

export default class BannerImg extends React.Component {

  constructor(props){
    super(props);
      
    this.state={
      

    }
  }

   
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.banner}>

      </ScrollView>
    )

  }

}



