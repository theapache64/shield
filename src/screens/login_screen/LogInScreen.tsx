import { default as React, ReactElement } from 'react';
import { Alert, Keyboard, View } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Guard, LogInResponse } from '../../api/responses/LogInResponse';
import { login, Params } from '../../api/routes/LogIn';
import { NetworkProgressOverlay } from '../../guerilla/ui/NetworkProgressOverlay';
import { AxiosRequestType } from '../../guerilla/utils/api/AxiosRequest';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { InputValidator } from '../../guerilla/utils/InputValidator';
import { Button } from '../../guerilla/widgets/Button';
import { Input } from '../../guerilla/widgets/Input';
import { GuardReducer, LOAD_GUARD_REQUEST, SAVE_GUARD_REQUEST } from '../../reducers/GuardReducer';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import { Guerilla } from '../../guerilla/Guerilla';

interface DispatchProps {
  login: (params: Params) => AxiosRequestType;
  loginResponse: NetworkResponse<LogInResponse>;
  saveGuard: (guard: Guard) => void;
  loadGuard: () => void;
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

    const { loginResponse } = this.props;

    const isLoggedIn = loginResponse.isSuccess && !loginResponse.response.error;
    const { guard, error } = this.props.guardReducer;

    if (isLoggedIn && guard == null && error == null) {
      this.props.saveGuard(loginResponse.response.data.guard);
      return;
    }

    if (guard && !error) {
      Alert.alert('Session saved', guard.name);
      return;
    }

    if (error) {
      Alert.alert('Error while saving guard', error);
    }

    return (
      <View flex={1} backgroundColor={Guerilla.getInstance().getColorPrimary()}>
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

        <NetworkProgressOverlay
          loadingMessage={'Authenticating...'}
          response={this.props.loginResponse}
        />

      </View>
    );
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

      this.props.login(
        new Params(
          username,
          password
        )
      );
    }
  }
}

const mapStateToProps = (rootReducer: RootReducer) => ({
  loginResponse: rootReducer.loginReducer,
  guardReducer: rootReducer.guardReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => {

  return {
    login: (params: Params) => dispatch(login(params)),
    loadGuard: () => dispatch({ type: LOAD_GUARD_REQUEST }),
    saveGuard: (guard: Guard) => dispatch({ type: SAVE_GUARD_REQUEST, payload: { guard } })
  };
};

export const logInScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(LogInScreen);
