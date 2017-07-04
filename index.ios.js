/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React from 'react';
import {
  AppRegistry
} from 'react-native';
import {
    StackNavigator,
    TabNavigator,
} from 'react-navigation';
import {Home,Help,Welcome} from './src/Containers';


class ReactDemo extends React.Component {
  static navigationOptions = {
    title: '发现课程',
  };
  render() {
    
    return (
      <Home />
    );
  }
}

const SimpleApp = TabNavigator({
  HomePage: { screen: ReactDemo },
  HelpPage: { screen: Help },
  WelcomePage: { screen: Welcome },
});
 



AppRegistry.registerComponent('reactDemo', () => SimpleApp);
