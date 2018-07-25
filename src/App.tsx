/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * 
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 * 
 * @format
 */
import { Component, default as React } from 'react';
import { createStackNavigator } from 'react-navigation';

import { LogInScreen } from './screens/login_screen/LogInScreen';
import { MainScreen } from './screens/main_screen/MainScreen';
import { SplashScreen } from './screens/splash_screen/SplashScreen';

const RootStack = createStackNavigator(
  {
    SplashScreen,
    MainScreen,
    LogInScreen
  },
  {
    initialRouteName: 'SplashScreen',
    navigationOptions: {
      header: null
    }
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
