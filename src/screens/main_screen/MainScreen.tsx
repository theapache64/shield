import { default as React, PureComponent } from 'react';
import { View, Text } from 'react-native';
import { BaseShieldScreen } from '../base/BaseShieldScreen';

interface Props {

}

interface States {

}

export class MainScreen extends BaseShieldScreen<Props, States> {
  renderShieldScreen(): React.ReactElement<any> {
    return (
      <View>
        <Text>MainScreen</Text>
      </View >
    );
  }

}
