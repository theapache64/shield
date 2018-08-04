import { default as React, PureComponent, ReactElement } from 'react';
import { View } from 'react-native';
import { GuerillaText } from '../../guerilla/widgets/guerialla_text/GuerillaText';

interface Props {
  title: string;
}

interface States {

}

export class NewPassScreen extends PureComponent<Props, States> {
  render(): ReactElement<Props> {
    return (
      <View>
        <GuerillaText>NewPassScreen</GuerillaText>
      </View >
    );
  }
}
