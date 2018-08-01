import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './Styles';
import { Guerilla } from '../../Guerilla';

interface Props {
  title?: string;
}

interface States {

}

export class Header extends PureComponent<Props, States> {

  private readonly themedStyle = {
    backgroundColor: Guerilla.getInstance().getColorPrimary()
  };

  render(): ReactElement<any> {

    return (
      <View style={[styles.vHeader, this.themedStyle]}>
        <Text style={styles.tTitle}>{this.props.title}</Text>

        <SimpleLineIcons
          name={'logout'}
        />
      </View >
    );
  }
}
