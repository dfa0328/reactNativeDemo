'use strict';

import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
  },
  txt: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  serbtn:{
    backgroundColor:'rgba(255,255,255,0.5)',
    borderColor:'#ccc',
    borderWidth:1,
    height:36,
    lineHeight:36,
    borderRadius:6,
    paddingLeft:14,
    width:'100%',
    color:'#999',
    fontSize:14,
  },
  content:{
    padding:12,
    paddingTop:28,
  },
  serIcon:{
    width:12,
    height:12,
  }
});

export default class Home extends React.Component {
  static navigationOptions = {
    title: '发现课程',
  };
  
  constructor(props){
    super(props);

  }
   
  toSearch=()=>{

  }
  render() {


    return (
      <View style={styles.container}>
          <View style={styles.content}>
              
              <Text style={styles.serbtn} >输入课程或教师名称</Text>
          </View> 
           <Text style={styles.txt} >发现课程</Text>
      </View>
    )

  }

}



