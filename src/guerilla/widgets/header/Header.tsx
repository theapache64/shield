import { default as React, PureComponent } from 'react';
import { View, Text } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
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
        <Text style={styles.tTitle}>{this.props.title}</Text>

        <SimpleLineIcons
          name={'logout'}
        />
      </View >
    );
  }
}
