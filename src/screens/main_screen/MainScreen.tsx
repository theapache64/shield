import { default as React, ReactElement } from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Data, LoadHomeResponse } from '../../api/responses/LoadHomeResponse';
import { loadHome } from '../../api/routes/LodeHome';
import { App } from '../../App';
import { ToolbarMenuItem } from '../../guerilla/models/ToolbarMenuItem';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { Header } from '../../guerilla/widgets/header/Header';
import { GridMenuItemData } from '../../models/GridMenuItemData';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { Counter } from './widgets/counter/Counter';
import { styles } from './Styles';
import { GuerillaText } from '../../guerilla/widgets/guerialla_text/GuerillaText';
import { NumberUtils } from '../../guerilla/utils/NumberUtils';
import { materialColors } from '../../guerilla/res/MaterialColors';
import { GridMenuItem } from './widgets/grid_menu_item/GridMenuItem';

interface Props {
}

interface DispatchProps {
  loadHome: () => void;
  loadHomeReducer: NetworkResponse<LoadHomeResponse>;
}

interface States {

}

const MI_REFRESH = NumberUtils.getRandomId();
const MI_LOGOUT = NumberUtils.getRandomId();

const GI_ISSUE_NEW_PASS = NumberUtils.getRandomId();
const GI_ISSUED_PASSES = NumberUtils.getRandomId();
const GI_MY_PROFILE = NumberUtils.getRandomId();
const GI_GUARDS = NumberUtils.getRandomId();
const GI_LOGOUT = NumberUtils.getRandomId();
const GI_OTHER = NumberUtils.getRandomId();

class MainScreen extends BaseNetworkShieldScreen<LoadHomeResponse, Props & DispatchProps, States> {

  private static readonly TOOLBAR_MENU_ITEMS: ToolbarMenuItem[] = [
    new ToolbarMenuItem(MI_REFRESH, 'refresh'),
    new ToolbarMenuItem(MI_LOGOUT, 'logout'),
  ];

  private static readonly GRID_MENU_ITEMS: GridMenuItemData[] = [
    new GridMenuItemData(GI_ISSUE_NEW_PASS, 'ISSUE NEW PASS', 'plus'),
    new GridMenuItemData(GI_ISSUED_PASSES, 'VIEW ISSUED PASSES', 'eye'),
    new GridMenuItemData(GI_MY_PROFILE, 'MY PROFILE', 'user'),
    new GridMenuItemData(GI_GUARDS, 'GUARDS', 'mustache'),
    new GridMenuItemData(GI_OTHER, 'OTHER', 'tag'),
    new GridMenuItemData(GI_LOGOUT, 'LOGOUT', 'logout'),
  ];

  renderNetworkShieldScreen(response: LoadHomeResponse): ReactElement<any> {
    return (
      <View flex={1}>
        {/* Header */}
        <Header
          title={'Home'}
          onMenuItemPressed={this.onMenuItemPressed}
          menuIcons={MainScreen.TOOLBAR_MENU_ITEMS}
        />

        {response && this.renderContent(response.data)}

      </View>
    );
  }
  renderContent(data: Data): any {
    return (
      < FlatList<GridMenuItemData>
        ListHeaderComponent={this.getHeader(data)}
        data={MainScreen.GRID_MENU_ITEMS}
        keyExtractor={this.keyExtractor}
        numColumns={2}
        renderItem={this.renderGridMenuItem}
      />
    );
  }
  getHeader(data: Data): any {
    return (
      <Counter
        visitors={data.totalVisitorsIn}
        workers={data.totalWorkersIn}
      />
    );
  }

  keyExtractor(item: GridMenuItemData, index: number): string {
    return index.toString();
  }

  renderGridMenuItem = (item: ListRenderItemInfo<GridMenuItemData>) => (
    <GridMenuItem data={item.item} />
  )

  onMenuItemPressed = (menuItem: ToolbarMenuItem) => {
    switch (menuItem.id) {
      case MI_REFRESH:
        this.load();
        break;
      case MI_LOGOUT:
        break;
    }
  }

  load(): void {
    this.props.loadHome();
  }
  getResponseType(): any {
    return LoadHomeResponse;
  }

  getResponse(): NetworkResponse<LoadHomeResponse> {
    return this.props.loadHomeReducer;
  }

  componentDidMount(): void {
    this.load();
  }
}

const mapStateToProps = (rootReducer: RootReducer) => ({
  loadHomeReducer: rootReducer.loadHomeReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadHome: () => dispatch(loadHome(App.guard.apiKey))
});

export const mainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen);
