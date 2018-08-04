import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { GrammarUtils } from '../../../../guerilla/utils/GrammarUtils';
import { CounterNode } from '../counter_node/CounterNode';
import { styles } from './Styles';
import { GuerillaText } from '../../../../guerilla/widgets/guerialla_text/GuerillaText';

interface Props {
  visitors: number;
  workers: number;
}

interface States {

}

export class Counter extends PureComponent<Props, States> {
  render(): ReactElement<any> {

    const { workers, visitors } = this.props;

    return (
      <View>

        <GuerillaText
          style={styles.tStatistics}
          fontFamily={'Roboto-Medium'}
        >
          STATISTICS
        </GuerillaText>

        <View
          flexDirection={'row'}
        >
          {/* Visitors */}
          <CounterNode
            icon={'people'}
            count={visitors}
            title={`${GrammarUtils.getProper(visitors, 'visitor')} in`}
          />

          {/* Workers */}
          <CounterNode
            icon={'wrench'}
            count={workers}
            title={`${GrammarUtils.getProper(workers, 'worker')} in`}
          />

        </View >
      </View>
    );
  }
}
