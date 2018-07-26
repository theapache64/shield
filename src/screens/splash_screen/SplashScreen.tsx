import { default as React } from 'react';
import { Text, View, Animated } from 'react-native';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { materialColors } from '../../guerillas/res/MaterialColors';
import { StackActionsUtils } from '../../guerillas/utils/StackActionsUtils';
import { BaseScreenProps } from '../../guerillas/ui/BaseScreen';

interface Props extends BaseScreenProps {

}

interface States {
  fadeAnim: Animated.Value;
}

export class SplashScreen extends BaseShieldScreen<Props, States> {

  private static readonly ANIMATION_DURATION = 500;
  private static readonly SPLASH_TIMEOUT = SplashScreen.ANIMATION_DURATION + 1000;

  constructor(props: Props) {
    super(props);

    this.state = {
      fadeAnim: new Animated.Value(0),
    };
  }

  componentDidMount() {

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
        StackActionsUtils.resetTo('logInScreen', this.props.navigation);
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
