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
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { styles } from './Styles';

interface Props {
}

interface DispatchProps {
  loadHome: () => void;
  loadHomeReducer: NetworkResponse<LoadHomeResponse>;
}

interface States {

}

const MI_REFRESH = 1;
const MI_LOGOUT = 2;

const GI_ISSUE_NEW_PASS = 3;
const GI_ISSUED_PASSES = 4;

class MainScreen extends BaseNetworkShieldScreen<LoadHomeResponse, Props & DispatchProps, States> {

  private static readonly TOOLBAR_MENU_ITEMS: ToolbarMenuItem[] = [
    new ToolbarMenuItem(MI_REFRESH, 'refresh'),
    new ToolbarMenuItem(MI_LOGOUT, 'logout'),
  ];

  private static readonly GRID_MENU_ITEMS: GridMenuItemData[] = [
    new GridMenuItemData(GI_ISSUE_NEW_PASS, 'ISSUE NEW PASS', 'plus'),
    new GridMenuItemData(GI_ISSUED_PASSES, 'VIEW ISSUED PASSES', 'check'),
  ];

  renderNetworkShieldScreen(response: LoadHomeResponse): ReactElement<any> {
    return (
      <View>
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
      <View
        padding={10}
      >

        {/* Counter */}
        <Counter
          visitors={data.totalVisitorsIn}
          workers={data.totalWorkersIn}
        />

        {/* Menu Grid */}
        <FlatList<GridMenuItemData>
          data={MainScreen.GRID_MENU_ITEMS}
          keyExtractor={this.keyExtractor}
          numColumns={2}
          renderItem={this.renderGridMenuItem}
        />

      </View>

    );
  }

  keyExtractor(item: GridMenuItemData, index: number): string {
    return index.toString();
  }

  renderGridMenuItem = (item: ListRenderItemInfo<GridMenuItemData>) => (
    <TouchableOpacity style={styles.toGridMenuItem}>
      <View style={styles.vGridMenuItem}>
        <SimpleLineIcons
          name={item.item.icon}
          size={35}
          style={{ marginBottom: 10 }}
        />
        <Text>{item.item.title}</Text>
      </View>
    </TouchableOpacity>
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
