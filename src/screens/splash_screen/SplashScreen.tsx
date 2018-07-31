import { default as React } from 'react';
import { Text, View, Animated } from 'react-native';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { materialColors } from '../../guerillas/res/MaterialColors';
import { StackActionsUtils } from '../../guerillas/utils/StackActionsUtils';
import { BaseScreenProps } from '../../guerillas/ui/screen/BaseScreen';
import { connect } from 'react-redux';
import { RootReducer } from '../../reducers/RootReducer';
import { Dispatch } from 'redux';
import { GuardReducer, LOAD_GUARD_REQUEST, guardReducer } from '../../reducers/GuardReducer';
import { App } from '../../App';

interface DispatchProps {
  guardReducer: GuardReducer;
  loadGuard: () => void;
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

  componentDidMount() {
    console.warn('Loading guard');
    this.props.loadGuard();

  }

  componentWillReceiveProps(nextProps: Props & DispatchProps) {
    console.warn('Props are ', nextProps);

    if (nextProps.guardReducer.isLoaded) {

      App.guard = nextProps.guardReducer.guard;

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
          const nextScreen = App.guard ? 'MainScreen' : 'logInScreen';
          StackActionsUtils.resetTo(nextScreen, this.props.navigation);
        },
        SplashScreen.SPLASH_TIMEOUT
      );

    }
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
