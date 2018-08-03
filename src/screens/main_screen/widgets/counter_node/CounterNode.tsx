import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import { BaseComponent } from '../../../../guerilla/ui/BaseComponent';

interface Props {
  count: number;
  title: string;
}

interface States {

}

export class CounterNode extends BaseComponent<Props, States> {
  render(): ReactElement<any> {
    return (
      <View style={styles.vCounterNode}>
        {/* Count */}
        <Text style={styles.tCount}>{this.getProp('count')}</Text>

        {/* Title */}
        <Text>{this.getProp('title')}</Text>
      </View >
    );
  }

}
