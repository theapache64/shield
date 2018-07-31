import { default as React } from 'react';
import { Keyboard, View, Alert } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { Guard, LogInResponse } from '../../api/responses/LogInResponse';
import { NetworkProgressOverlay } from '../../guerillas/ui/NetworkProgressOverlay';
import { AxiosRequest, AxiosRequestType } from '../../guerillas/utils/api/AxiosRequest';
import { NetworkResponse } from '../../guerillas/utils/api/NetworkResponse';
import { InputValidator } from '../../guerillas/utils/InputValidator';
import { Button } from '../../guerillas/widgets/Button';
import { Input } from '../../guerillas/widgets/Input';
import { SAVE_GUARD_REQUEST, GuardReducer, LOAD_GUARD_REQUEST } from '../../reducers/GuardReducer';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import { Params, login } from '../../api/routes/LogIn';

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

  renderShieldScreen() {

    const { loginResponse } = this.props;

    const isLoggedIn = loginResponse.isSuccess && !loginResponse.response.error;
    const { guard, error } = this.props.guardReducer;

    if (isLoggedIn && guard == null && error == null) {
      console.warn('Saving guard ');
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
      <View flex={1}>
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
          colorPrimary={this.primaryColor}
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
