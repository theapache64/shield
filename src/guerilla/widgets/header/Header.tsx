import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './Styles';
import { Guerilla } from '../../Guerilla';
import { ToolbarMenuItem } from '../../models/ToolbarMenuItem';
import { GuerillaText } from '../guerialla_text/GuerillaText';

interface Props {
  title?: string;
  menuIcons?: ToolbarMenuItem[];
  onMenuItemPressed?: (menuItem: ToolbarMenuItem) => void;
}

interface States {

}

export class Header extends PureComponent<Props, States> {

  private readonly themedStyle = {
    backgroundColor: Guerilla.getInstance().getColorPrimary()
  };

  render(): ReactElement<any> {

    const { menuIcons } = this.props;

    return (
      <View style={[styles.vHeader, this.themedStyle]}>

        <GuerillaText style={styles.tTitle}>{this.props.title}</GuerillaText>

        <View style={styles.vIcons}>
          {menuIcons && this.renderMenuIcons(menuIcons)}
        </View>
      </View >
    );
  }

  renderMenuIcons(menuIcons: ToolbarMenuItem[]): any {
    const guerilla = Guerilla.getInstance();
    // Rendering menu icons
    return menuIcons.map((item: ToolbarMenuItem, index: number) => (
      <TouchableOpacity
        style={{ padding: 13, marginRight: 5 }}
        key={index}
        onPress={this.props.onMenuItemPressed && this.props.onMenuItemPressed.bind(null, item)}
      >
        <SimpleLineIcons
          style={[styles.sli]}
          name={item.icon}
          size={guerilla.getHeaderIconSize()}
          color={guerilla.getHeaderIconColor()}
        />
      </TouchableOpacity>
    ));
  }
}
