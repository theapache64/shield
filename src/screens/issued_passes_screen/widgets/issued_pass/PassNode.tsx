import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { GuerillaText } from '../../../../guerilla/widgets/guerialla_text/GuerillaText';

interface Props {
  text: string;
  icon: string;
}

interface States {

}

export class PassNode extends PureComponent<Props, States> {
  render(): ReactElement<any> {
    return (
      <View alignItems={'center'} flexDirection={'row'}>
        {/* Icon */}
        <SimpleLineIcons
          name={this.props.icon}
          size={18}
          style={{ marginRight: 10 }}
        />

        {/* Name */}
        <GuerillaText
          style={{ fontSize: 15 }}
        >

          {this.props.text}
        </GuerillaText>
      </View>
    );
  }
}
