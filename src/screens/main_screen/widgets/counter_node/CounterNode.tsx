import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';

interface Props {
  count: number;
  title: string;
}

interface States {

}

export class CounterNode extends PureComponent<Props, States> {
  render(): ReactElement<any> {
    return (
      <View style={styles.vCounterNode}>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
        <Text>CounterNode</Text>
      </View >
    );
  }
}
