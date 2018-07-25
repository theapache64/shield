import { default as React } from 'react';
import { View, Alert } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

import { Input } from '../../guerillas/widgets/Input';
import { BaseShieldScreen } from '../base/BaseShieldScreen';
import { styles } from './Styles';
import { Button } from '../../guerillas/widgets/Button';
import { InputValidator } from '../../guerillas/utils/InputValidator';

interface Props {

}

interface States {

}

export class LogInScreen extends BaseShieldScreen<Props, States> {

  iUsername = React.createRef<Input>();
  iPassword = React.createRef<Input>();

  inputValidator: InputValidator;

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
          onPress={this.onSignUpPressed}
        />

      </View>
    );
  }

  onSignUpPressed = () => {

    if (this.inputValidator == null) {
      this.inputValidator = new InputValidator([
        this.iUsername.current,
        this.iPassword.current
      ]);
    }

    if (this.inputValidator.isAllValid(true)) {
      
      const username = this.iUsername.current.getValue();
      const password = this.iPassword.current.getValue();
      
    }
  }
}
