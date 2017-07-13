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
    TabNavigator,
} from 'react-navigation';
import {Home,Course,Welcome} from './src/Containers';


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
  CoursePage: { screen: Course },
  WelcomePage: { screen: Welcome },
},{
  tabBarOptions: {
    activeTintColor: '#09bb63',
  },
});
 



AppRegistry.registerComponent('reactDemo', () => SimpleApp);
