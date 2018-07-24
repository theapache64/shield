import { default as React } from 'react';
import { Text, View } from 'react-native';

import { Input } from '../../guerillas/widgets/Input';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

interface Props {

}

interface States {

}

export class LogInScreen extends BaseShieldScreen<Props, States> {

  renderShieldScreen() {
    return (
      <View style={styles.vContainer}>

        <SimpleLineIcons
          name={'shield'}
          size={50}
          style={styles.sliShield}
        />

        {/* Username */}
        <Input
          leftIcon={'user'}
          placeholder={'Username'}
        />

        {/* Password */}
        <Input
          leftIcon={'lock'}
          placeholder={'Password'}
        />

      </View>
    );
  }
}
