import { default as React, PureComponent, ReactElement } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

import { Guerilla } from '../../Guerilla';
import { HeaderMenuItem } from '../../models/HeaderMenuItem';
import { ToolbarMenuItem } from '../../models/ToolbarMenuItem';
import { NumberUtils } from '../../utils/NumberUtils';
import { GuerillaText } from '../guerialla_text/GuerillaText';
import { styles } from './Styles';
import { NavigationScreenProp } from 'react-navigation';

interface Props {
  title?: string;
  menuIcons?: ToolbarMenuItem[];
  backNavigation?: boolean;
  navigation?: NavigationScreenProp<any, any>;
  onMenuItemPressed?: (menuItem: ToolbarMenuItem) => void;
}

interface States {

}

const TMI_BACK_BUTTON = NumberUtils.getRandomId();

export class Header extends PureComponent<Props, States> {

  static defaultProps: Props = {
    backNavigation: false
  };

  private readonly themedStyle = {
    backgroundColor: Guerilla.getInstance().getColorPrimary()
  };

  onMenuItemPressed = (item: ToolbarMenuItem) => {
    if (item.id === TMI_BACK_BUTTON) {
      if (this.props.navigation) {
        this.props.navigation.goBack();
      } else {
        throw new Error('BackNavigation enabled but navigation object not passed');
      }
    } else if (this.props.onMenuItemPressed) {
      this.props.onMenuItemPressed(item);
    }
  }

  render(): ReactElement<any> {

    const { menuIcons, backNavigation } = this.props;

    return (
      <View style={[styles.vHeader, this.themedStyle]}>

        <View
          alignItems={'center'}
          flexDirection={'row'}
        >
          {backNavigation && this.renderBackButton()}
          <GuerillaText style={styles.tTitle}>{this.props.title}</GuerillaText>
        </View>

        <View style={styles.vIcons}>
          {menuIcons && this.renderMenuIcons(menuIcons)}
        </View>
      </View >
    );
  }
  renderBackButton(): any {
    return (
      this.renderMenuIcon(
        new ToolbarMenuItem(
          TMI_BACK_BUTTON,
          'arrow-left'
        ),
        -1
      )
    );
  }

  renderMenuIcons(menuIcons: ToolbarMenuItem[]): any {

    // Rendering menu icons
    return menuIcons.map((item: ToolbarMenuItem, index: number) => (
      this.renderMenuIcon(item, index)
    ));
  }
  renderMenuIcon(item: ToolbarMenuItem, index: number): any {
    const guerilla = Guerilla.getInstance();
    return (
      <TouchableOpacity
        // no margin for back button
        style={{ padding: 13, marginRight: item.id !== TMI_BACK_BUTTON ? 5 : 0 }}
        key={index}
        onPress={this.onMenuItemPressed.bind(null, item)}
      >
        <SimpleLineIcons
          style={[styles.sli]}
          name={item.icon}
          size={guerilla.getHeaderIconSize()}
          color={guerilla.getHeaderIconColor()}
        />
      </TouchableOpacity>
    );
  }
}
