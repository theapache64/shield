import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { styles } from './Styles';
import { BaseComponent } from '../../../../guerilla/ui/BaseComponent';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { materialColors } from '../../../../guerilla/res/MaterialColors';

interface Props {
  count: number;
  title: string;
  icon: string;
}

interface States {

}

export class CounterNode extends BaseComponent<Props, States> {
  render(): ReactElement<any> {
    return (
      <View style={styles.vCounterNode}>

        <View
          flexDirection={'column'}
          alignItems={'center'}
        >
          {/* Icon */}
          <SimpleLineIcons
            style={{ marginBottom: 10 }}
            name={this.getProp('icon')}
            color={materialColors.GREY[500]}
            size={25}
          />

          {/* Count */}
          <Text style={styles.tCount}>{this.getProp('count')}</Text>
        </View>

        {/* Title */}
        <Text>{this.getProp('title')}</Text>
      </View >
    );
  }

}
