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
import { Component, default as React, ReactElement } from 'react';
import { createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { Guerilla } from './guerilla/Guerilla';
import { materialColors } from './guerilla/res/MaterialColors';
import { logInScreen } from './screens/login_screen/LogInScreen';
import { mainScreen } from './screens/main_screen/MainScreen';
import { splashScreen } from './screens/splash_screen/SplashScreen';
import { store } from './Store';
import { newPassScreen } from './screens/new_pass_screen/NewPassScreen';

const RootStack = createStackNavigator(
  {
    splashScreen,
    mainScreen,
    logInScreen,
    newPassScreen
  },
  {
    initialRouteName: 'newPassScreen',
    initialRouteParams: {
      count: 5,
    },
    navigationOptions: {
      header: null
    }
  }
);

interface Props { }
export class App extends Component<Props> {

  constructor(props: Props) {
    super(props);

  }

  render(): ReactElement<any> {

    Guerilla.getInstance()
      .setHeaderTheme('light')
      .setColorPrimary(materialColors.GREEN[500])
      .setColorPrimaryDark(materialColors.GREEN[700]);

    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}
