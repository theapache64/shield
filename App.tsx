/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */

import { default as React, Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { SplashScreen } from './src/screens/splash_screen/SplashScreen';

const RootStack = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: 'SplashScreen'
  }
);

interface Props { }
export class App extends Component<Props> {
  render() {
    return (
      <RootStack />
    );
  }
}
