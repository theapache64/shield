import { default as React, ReactElement } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { LoadHomeResponse } from '../../api/responses/LoadHomeResponse';
import { loadHome } from '../../api/routes/LodeHome';
import { App } from '../../App';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { Header } from '../../guerilla/widgets/header/Header';
import { Guerilla } from '../../guerilla/Guerilla';
import { MenuIcon } from '../../guerilla/models/MenuIcon';

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

class MainScreen extends BaseNetworkShieldScreen<LoadHomeResponse, Props & DispatchProps, States> {

  private static readonly MENU_ICONS: MenuIcon[] = [
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_REFRESH, 'login'),
    new MenuIcon(MI_LOGOUT, 'logout')
  ];

  renderNetworkShieldScreen(response: LoadHomeResponse): ReactElement<any> {
    return (
      <View>
        <Header
          title={'Home'}
          onMenuItemPressed={this.onMenuItemPressed}
          menuIcons={MainScreen.MENU_ICONS}
        />
      </View>
    );
  }

  onMenuItemPressed = (menuItem: MenuIcon) => {
    console.warn(menuItem.icon);
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
