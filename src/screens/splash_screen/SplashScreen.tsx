import { default as React } from 'react';
import { Text, View } from 'react-native';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { materialColors } from '../../guerillas/res/MaterialColors';

interface Props {

}

interface States {

}

export class SplashScreen extends BaseShieldScreen<Props, States> {
  renderShieldScreen(): React.ReactElement<any> {
    return (
      <View style={styles.vContainer}>

        {/* Logo */}
        <SimpleLineIcons
          name={'shield'}
          color={materialColors.GREY[100]}
          size={100}
        />

      </View >
    );
  }

}
