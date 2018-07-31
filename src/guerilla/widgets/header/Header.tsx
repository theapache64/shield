import { default as React, PureComponent } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';

interface Props {
  title?: string;
}

interface States {

}

export class Header extends PureComponent<Props, States> {
  render() {
    return (
      <View style={styles.vHeader}>
        <Text>{this.props.title}</Text>
      </View >
    );
  }
}
