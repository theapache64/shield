import { default as React, PureComponent, ReactElement } from 'react';
import { View } from 'react-native';
import { GrammarUtils } from '../../../../guerilla/utils/GrammarUtils';
import { CounterNode } from '../counter_node/CounterNode';

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
    );
  }
}
