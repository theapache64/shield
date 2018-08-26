import { default as React, ReactElement } from 'react';
import { FlatList, ListRenderItemInfo, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Data, LoadHomeResponse } from '../../api/responses/LoadHomeResponse';
import { loadHome } from '../../api/routes/LoadHome';
import { App } from '../../App';
import { ToolbarMenuItem } from '../../guerilla/models/ToolbarMenuItem';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { NumberUtils } from '../../guerilla/utils/NumberUtils';
import { Header } from '../../guerilla/widgets/header/Header';
import { GridMenuItemData } from '../../models/GridMenuItemData';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { Counter } from './widgets/counter/Counter';
import { GridMenuItem } from './widgets/grid_menu_item/GridMenuItem';
import { StackActionsUtils } from '../../guerilla/utils/StackActionsUtils';
import * as Keychain from 'react-native-keychain';
import { Guard } from '../../api/responses/LogInResponse';
import { GuardReducer } from '../../reducers/GuardReducer';
import { CLEAR_GUARD_REQUEST } from '../../sagas/guard/ClearGuardSaga';
import { default as Dialog } from 'react-native-dialog';
import { NavProps } from '../new_pass_screen/NewPassScreen';
import { InputWrapper } from '../../guerilla/widgets/custom_picker/InputWrapper';
import { styles } from './Styles';
import { Guerilla } from '../../guerilla/Guerilla';

interface Props {
}

interface DispatchProps {
  loadHome: (apiKey: string) => void;
  loadHomeReducer: NetworkResponse<LoadHomeResponse>;
  guardReducer: GuardReducer;
  clearGuard: () => void;
}

interface States {
  isIssuePassDialogVisible: boolean;
  numOfPasses: string;
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

  state = {
    isIssuePassDialogVisible: false,
    numOfPasses: ''
  };
  renderNetworkShieldScreen(response: LoadHomeResponse): ReactElement<any> {
    return (
      <View flex={1}>
        {/* Header */}
        <Header
          title={'Home'}
          onMenuItemPressed={this.onMenuItemPressed}
          menuIcons={MainScreen.TOOLBAR_MENU_ITEMS}
        />

        <Dialog.Container visible={this.state.isIssuePassDialogVisible}>

          <Dialog.Title>Number of Passes</Dialog.Title>
          <Dialog.Description>Number of passes to be issued</Dialog.Description>

          <Dialog.Input
            style={styles.dlgInput}
            keyboardType={'numeric'}
            onChangeText={this.onNumberOfPassesChanged}
            placeholder={'Number of passes'}
          />

          <Dialog.Button
            label={'CANCEL'}
            color={Guerilla.getInstance().getColorPrimary()}
            onPress={this.onCancelIssuePassDialogButtonPressed}
          />

          <Dialog.Button
            label={'OK'}
            color={Guerilla.getInstance().getColorPrimary()}
            onPress={this.onIssuePassPassDialogButtonPressed}
          />
        </Dialog.Container>

        {response && this.renderContent(response.data)}

      </View>
    );
  }

  onNumberOfPassesChanged = (newVal: string) => {
    this.setState({
      numOfPasses: newVal
    });
  }
  onIssuePassPassDialogButtonPressed = () => {
    const numOfPasses = parseInt(this.state.numOfPasses, 10);
    this.setState(
      {
        isIssuePassDialogVisible: false
      },
      () => {
        if (numOfPasses > 0) {
          const params: NavProps = {
            count: numOfPasses
          };
          this.props.navigation.navigate('newPassScreen', params);
        } else {
          Alert.alert('Error', 'Number of passes should be greater or equal to one');
        }
      }
    );

  }

  onCancelIssuePassDialogButtonPressed = () => {
    this.setState({
      isIssuePassDialogVisible: false
    });
  }

  hasHeaderMargin(): boolean {
    return true;
  }

  renderContent(data: Data): any {
    return (
      <FlatList<GridMenuItemData>
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
    <GridMenuItem
      onMenuItemPressed={this.onGridMenuItemPressed}
      data={item.item}
    />
  )

  onGridMenuItemPressed = (item: GridMenuItemData) => {
    switch (item.id) {
      case GI_LOGOUT:
        this.clearGuard();
        return;

      case GI_ISSUE_NEW_PASS:
        this.setState({
          isIssuePassDialogVisible: true
        });
        return;

      default:
        Alert.alert('Coming Soon!', 'This is a future feature');
    }
  }

  onMenuItemPressed = (menuItem: ToolbarMenuItem) => {
    switch (menuItem.id) {

      case MI_REFRESH:
        this.load();
        break;

      case MI_LOGOUT:
        this.clearGuard();
        break;

    }
  }

  clearGuard(): void {
    Keychain
      .resetInternetCredentials(Guard.KEY)
      .then(() => {
        // Cleared

        // Clearing from state
        this.props.clearGuard();

        StackActionsUtils.resetTo('logInScreen', this.props.navigation);

      }).catch((reason) => {
        this.showError(reason);
      });
  }

  load(): void {
    this.props.loadHome(
      this.props.guardReducer.guard.apiKey
    );
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
  loadHomeReducer: rootReducer.loadHomeReducer,
  guardReducer: rootReducer.guardReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadHome: (apiKey: string) => dispatch(loadHome(apiKey)),
  clearGuard: () => dispatch({ type: CLEAR_GUARD_REQUEST })
});

export const mainScreen = connect(mapStateToProps, mapDispatchToProps)(MainScreen);
