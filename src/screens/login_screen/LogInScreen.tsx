import { default as React, ReactElement } from 'react';
import { Keyboard, View, Alert } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { LogInResponse, Guard } from '../../api/responses/LogInResponse';
import { login, Params } from '../../api/routes/LogIn';
import { Guerilla } from '../../guerilla/Guerilla';
import { NetworkProgressOverlay } from '../../guerilla/ui/NetworkProgressOverlay';
import { AxiosRequestType } from '../../guerilla/utils/api/AxiosRequest';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { InputValidator } from '../../guerilla/utils/InputValidator';
import { Button } from '../../guerilla/widgets/Button';
import { Input } from '../../guerilla/widgets/Input';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import * as Keychain from 'react-native-keychain';
import { StackActionsUtils } from '../../guerilla/utils/StackActionsUtils';
import { put } from 'redux-saga/effects';
import { LOAD_GUARD_REQUEST } from '../../sagas/GuardSaga';
import { GuardReducer } from '../../reducers/GuardReducer';

interface DispatchProps {
  login: (params: Params) => AxiosRequestType;
  loginResponse: NetworkResponse<LogInResponse>;
  loadGuard: () => any;
  guardReducer: GuardReducer;
}

interface Props {

}

interface States {

}

class LogInScreen extends BaseShieldScreen<Props & DispatchProps, States> {

  iUsername = React.createRef<Input>();
  iPassword = React.createRef<Input>();

  inputValidator: InputValidator;

  renderShieldScreen(): ReactElement<any> {

    return (
      <View flex={1} backgroundColor={Guerilla.getInstance().getColorPrimary()}>
        <NetworkProgressOverlay
          loadingMessage={'Authenticating...'}
          response={this.props.loginResponse}
        />

        <View style={styles.vContainer}>

          <SimpleLineIcons
            name={'shield'}
            size={50}
            color={this.primaryColorDark}
            style={styles.sliShield}
          />

          {/* Username */}
          <Input
            ref={this.iUsername}
            leftIcon={'user'}
            placeholder={'Username'}
          />

          {/* Password */}
          <Input
            ref={this.iPassword}
            leftIcon={'lock'}
            secureTextEntry={true}
            placeholder={'Password'}
          />

          {/* SignUp */}
          <Button
            title={'LogIn'}
            onPress={this.onLogInPressed}
          />

        </View>

      </View>
    );
  }

  componentWillReceiveProps(newProps: Props & DispatchProps): void {

    if (newProps.guardReducer.guard) {
      StackActionsUtils.resetTo('mainScreen', this.props.navigation);
      return;
    }

    if (newProps.loginResponse.isSuccess) {
      // Save guard
      Keychain.setInternetCredentials(
        Guard.KEY,
        Guard.KEY,
        JSON.stringify(newProps.loginResponse.response.data.guard)
      ).then(() => {
        this.props.loadGuard();
      }).catch((reason) => {
        this.showError('Failed to save guard');
      });
    }

  }

  onLogInPressed = () => {

    if (this.inputValidator == null) {
      this.inputValidator = new InputValidator([
        this.iUsername.current,
        this.iPassword.current
      ]);
    }

    if (this.inputValidator.isAllValid(true)) {

      // Dismissing keyboard
      Keyboard.dismiss();

      const username = this.iUsername.current.getValue();
      const password = this.iPassword.current.getValue();

      this.props.login(new Params(
        username,
        password
      ));

    }
  }
}

const mapStateToProps = (rootReducer: RootReducer) => ({
  loginResponse: rootReducer.loginReducer,
  guardReducer: rootReducer.guardReducer,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  login: (params: Params) => dispatch(login(params)),
  loadGuard: () => dispatch({ type: LOAD_GUARD_REQUEST })
});

export const logInScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInScreen);
