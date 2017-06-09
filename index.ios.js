/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,

} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {Help,Welcome} from './src/Containers';


class ReactDemo extends React.Component {
  static navigationOptions = {
    title: '首页',
  };
  render() {
     const { navigate } = this.props.navigation;
    return (
       <View>
            <View>
                <TouchableOpacity onPress={() => navigate('HelpPage')} >
                  <Text>帮助</Text> 
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigate('WelcomePage')} >
                  <Text>欢迎</Text> 
                </TouchableOpacity>
             </View>
        </View>
    );
  }
}

const SimpleApp = StackNavigator({
  HomePage: { screen: ReactDemo },
  HelpPage: { screen: Help },
  WelcomePage: { screen: Welcome },
});
 



AppRegistry.registerComponent('reactDemo', () => SimpleApp);
