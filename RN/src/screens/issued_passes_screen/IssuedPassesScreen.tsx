import { default as React, ReactElement } from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Company, Data, GetPassesResponse, Pass } from '../../api/responses/GetPassesResponse';
import { getPasses, Params as GetPassesParams } from '../../api/routes/GetPasses';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { Header } from '../../guerilla/widgets/header/Header';
import { GuardReducer } from '../../reducers/GuardReducer';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { styles } from './Styles';
import { GuerillaText } from '../../guerilla/widgets/guerialla_text/GuerillaText';
import { IssuedPass } from './widgets/issued_pass/IssuedPass';
import { materialColors } from '../../guerilla/res/MaterialColors';
import { Params as RevokePassParams, revokePass } from '../../api/routes/RevokePass';
import { RevokePassResponse } from '../../api/responses/RevokePassResponse';
import { NetworkProgressOverlay } from '../../guerilla/ui/NetworkProgressOverlay';

interface DispatchProps {
  guardReducer: GuardReducer;
  getPasses: (authorization: string, params: GetPassesParams) => void;
  revokePass: (authorization: string, params: RevokePassParams) => void;
  getPassesResponse: NetworkResponse<GetPassesResponse>;
  revokePassResponse: NetworkResponse<RevokePassResponse>;
}

interface Props {

}

interface States {
  activeTabIndex: number;
}

class IssuedPassesScreen extends BaseNetworkShieldScreen<
  GetPassesResponse,
  Props & DispatchProps,
  States
  > {

  state = {
    activeTabIndex: 0
  };
  flTab = React.createRef<FlatList<Company>>();

  renderNetworkShieldScreen(response: GetPassesResponse): ReactElement<any> {
    return (
      <View flex={1}>
        <Header
          navigation={this.props.navigation}
          backNavigation={true}
          title={'Issued Passes'}
        />
        {response !== null && this.renderIssuedPasses(response.data)}

        <NetworkProgressOverlay
          hasHeaderMargin={true}
          response={this.props.revokePassResponse}
        />

      </View>
    );
  }

  componentWillReceiveProps(nextProps: DispatchProps): void {
    if (nextProps.revokePassResponse.isSuccess) {
      if (!nextProps.revokePassResponse.response.error) {
        // Removed
        
      }
    }
  }

  renderIssuedPasses(data: Data): any {
    return (
      <View>

        {/* Tabs */}
        <FlatList<Company>
          ref={this.flTab}
          data={data.companies}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={this.renderTab}
          keyExtractor={this.keyExtractor}
        />
        {/* Passes */}
        <FlatList<Pass>
          style={{ backgroundColor: 'red' }}
          data={data.companies[this.state.activeTabIndex].passes}
          renderItem={this.renderPass}
          keyExtractor={this.keyExtractor}
        />

      </View>
    );
  }

  renderPass = (item: ListRenderItemInfo<Pass>): ReactElement<any> => {
    return (
      <IssuedPass
        onRevokePassPressed={this.onRevokePassPressed}
        pass={item.item}
      />
    );
  }

  onRevokePassPressed = (pass: Pass) => {
    this.props.revokePass(
      this.props.guardReducer.guard.apiKey,
      new RevokePassParams(
        pass.id
      )
    );
  }

  keyExtractor(item: any, index: number): string {
    return index.toString();
  }

  renderTab = (item: ListRenderItemInfo<Company>) => {
    const isActiveTab = item.index === this.state.activeTabIndex;
    return (
      <TouchableOpacity onPress={this.onTabPressed.bind(null, item)}>
        <View style={[styles.vTab, isActiveTab && styles.vActiveTab]}>
          <GuerillaText
            fontFamily={isActiveTab ? 'Roboto-Medium' : 'Roboto-Regular'}
            style={styles.tTabTitle}
          >
            {item.item.name}
          </GuerillaText>
        </View>
      </TouchableOpacity >
    );
  }
  onTabPressed = (item: ListRenderItemInfo<Company>) => {
    this.setState(
      {
        activeTabIndex: item.index
      },
      () => {
        this.flTab.current.scrollToIndex({
          index: this.state.activeTabIndex,
          animated: true,
          viewPosition: 0.5
        });
      }
    );
  }
  load(): void {
    this.props.getPasses(
      this.props.guardReducer.guard.apiKey,
      new GetPassesParams()
    );
  }
  getResponseType(): any {
    return GetPassesResponse;
  }
  getResponse(): NetworkResponse<GetPassesResponse> {
    return this.props.getPassesResponse;
  }

  componentDidMount(): void {
    this.load();
  }

}

const mapStateToProps = (rootReducer: RootReducer) => ({
  guardReducer: rootReducer.guardReducer,
  revokePassResponse: rootReducer.revokePassReducer,
  getPassesResponse: rootReducer.getPassesReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPasses: (authorization: string, params: GetPassesParams) =>
    dispatch(getPasses(authorization, params)),
  revokePass: (authorization: string, params: RevokePassParams) =>
    dispatch(revokePass(authorization, params))
});

export const issuedPassesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuedPassesScreen);
