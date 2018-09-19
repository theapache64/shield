import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './Styles';
import { GridMenuItemData } from '../../../../models/GridMenuItemData';
import { materialColors } from '../../../../guerilla/res/MaterialColors';
import { GuerillaText } from '../../../../guerilla/widgets/guerialla_text/GuerillaText';

interface Props {
  data: GridMenuItemData;
  onMenuItemPressed: (item: GridMenuItemData) => void;
}

interface States {

}

export class GridMenuItem extends PureComponent<Props, States> {
  render(): ReactElement<any> {
    const { data } = this.props;
    return (
      <TouchableOpacity
        onPress={this.props.onMenuItemPressed.bind(null, data)}
        style={styles.toGridMenuItem}
      >
        <View style={styles.vGridMenuItem}>
          <SimpleLineIcons
            name={data.icon}
            size={37}
            color={materialColors.GREY[700]}
            style={{ margin: 20 }}
          />
          <GuerillaText color={materialColors.GREY[500]}>
            {data.title}
          </GuerillaText>
        </View>
      </TouchableOpacity>
    );
  }
}
