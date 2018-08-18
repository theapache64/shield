import { default as React } from 'react';
import { Animated } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { materialColors } from '../../guerilla/res/MaterialColors';
import { BaseScreenProps } from '../../guerilla/ui/screen/BaseScreen';
import { StackActionsUtils } from '../../guerilla/utils/StackActionsUtils';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';

interface DispatchProps {
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

  componentDidMount(): void {

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
        const nextScreen = 'logInScreen';
        StackActionsUtils.resetTo(nextScreen, this.props.navigation);
      },
      SplashScreen.SPLASH_TIMEOUT
    );

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
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
});

export const splashScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(SplashScreen);
