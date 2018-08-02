import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './Styles';
import { Guerilla } from '../../Guerilla';
import { MenuIcon } from '../../models/MenuIcon';

interface Props {
  title?: string;
  menuIcons?: MenuIcon[];
  onMenuItemPressed?: (menuItem: MenuIcon) => void;
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
      
        <Text style={styles.tTitle}>{this.props.title}</Text>

        <View style={styles.vIcons}>
          {menuIcons && this.renderMenuIcons(menuIcons)}
        </View>
      </View >
    );
  }

  renderMenuIcons(menuIcons: MenuIcon[]): any {
    const guerilla = Guerilla.getInstance();
    // Rendering menu icons
    return menuIcons.map((item: MenuIcon, index: number) => (
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
