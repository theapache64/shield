import { default as React } from 'react';
import { Animated, Alert } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { materialColors } from '../../guerilla/res/MaterialColors';
import { BaseScreenProps } from '../../guerilla/ui/screen/BaseScreen';
import { StackActionsUtils } from '../../guerilla/utils/StackActionsUtils';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import * as Keychain from 'react-native-keychain';
import { Guard } from '../../api/responses/LogInResponse';
import { LOAD_GUARD_REQUEST } from '../../sagas/GuardSaga';
import { GuardReducer } from '../../reducers/GuardReducer';

interface DispatchProps {
  loadGuard: () => void;
  guardReducer: GuardReducer;
}

interface Props extends BaseScreenProps<any> {

}

interface States {
  fadeAnim: Animated.Value;
}

class SplashScreen extends BaseShieldScreen<Props & DispatchProps, States> {

  private static readonly ANIMATION_DURATION = 500;
  private static readonly SPLASH_TIMEOUT = SplashScreen.ANIMATION_DURATION + 1000;

  constructor(props: Props & DispatchProps) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentWillReceiveProps(nextProps: Props & DispatchProps): any {

    // Loaded guard will be available here
    // Starting animation
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 1000
      }
    ).start();

    // Setting splash timeout
    setTimeout(
      () => {
        const nextScreen = nextProps.guardReducer.guard ? 'mainScreen' : 'logInScreen';
        StackActionsUtils.resetTo(nextScreen, this.props.navigation);
      },
      SplashScreen.SPLASH_TIMEOUT
    );
  }
  componentDidMount(): void {
    // Loading guard
    this.props.loadGuard();
  }

  renderShieldScreen(): React.ReactElement<any> {

    return (
      <Animated.View
        style={[styles.vContainer, { opacity: this.state.fadeAnim }]}
      >

        {/* Logo */}
        <SimpleLineIcons
          name={'shield'}
          color={materialColors.GREY[600]}
          size={100}
        />

      </Animated.View >
    );
  }

}

const mapStateToProps = (rootReducer: RootReducer) => ({
  guardReducer: rootReducer.guardReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadGuard: () => dispatch({ type: LOAD_GUARD_REQUEST })
});

export const splashScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
