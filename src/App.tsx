import 'reflect-metadata';

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
import { Provider } from 'react-redux';

import { GuardReducer } from './reducers/GuardReducer';
import { logInScreen } from './screens/login_screen/LogInScreen';
import { MainScreen } from './screens/main_screen/MainScreen';
import { splashScreen } from './screens/splash_screen/SplashScreen';
import { store } from './Store';
import { Guard } from './api/responses/LogInResponse';

const RootStack = createStackNavigator(
  {
    splashScreen,
    MainScreen,
    logInScreen
  },
  {
    initialRouteName: 'splashScreen',
    navigationOptions: {
      header: null
    }
  }
);

interface Props { }
export class App extends Component<Props> {

  public static guard: Guard;

  render() {
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
