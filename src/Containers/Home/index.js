'use strict';

import React from 'react';
import { 
    StyleSheet, 
    Text, 
    View,
    Image, 
} from 'react-native';
import ViewPager from 'react-native-viewpager';


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
    paddingLeft:40,
    width:'100%',
    color:'#999',
    fontSize:14,
  },
  header:{
    padding:12,
    paddingTop:28,
  },
  txtInput:{
    position:'relative'
  },
  serIcon:{
    width:16,
    height:16,
    position:'absolute',
    left:12,
    top:11,
  },
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

export default class Home extends React.Component {

  constructor(props){
    super(props);
    var dataSource = new ViewPager.DataSource({
      pageHasChanged: (p1, p2) => p1 !== p2,
    });  
    this.state={
      dataSource:dataSource.cloneWithPages(BannerImg)

    }
  }

   
  toSearch=()=>{

  }
  renderPage=(data)=>{
    return(
      <Image 
         source={data} 
         style={styles.banner}
      />

      )
  }
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.txtInput}>
                 <Image
                    style={styles.serIcon}
                    source={require('./images/icon-search.png')}
                  />
                <Text style={styles.serbtn} >输入课程或教师名称</Text>
              </View> 
          </View>
          <View style={styles.imgList}>
            <ViewPager 
              style={{height:130}}
              dataSource={this.state.dataSource}
              renderPage={this.renderPage}
              isLoop={true} 
              autoPlay={false}
            />
          </View>
      </View>
    )

  }

}



