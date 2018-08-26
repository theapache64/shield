import { default as React, ReactElement } from 'react';
import { FlatList, ListRenderItemInfo, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { Company, Data, GetPassesResponse } from '../../api/responses/GetPassesResponse';
import { getPasses, Params } from '../../api/routes/GetPasses';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { Header } from '../../guerilla/widgets/header/Header';
import { GuardReducer } from '../../reducers/GuardReducer';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { styles } from './Styles';
import { GuerillaText } from '../../guerilla/widgets/guerialla_text/GuerillaText';

interface DispatchProps {
  guardReducer: GuardReducer;
  getPasses: (authorization: string, params: Params) => void;
  getPassesResponse: NetworkResponse<GetPassesResponse>;
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
      <View>
        <Header
          navigation={this.props.navigation}
          backNavigation={true}
          title={'Issued Passes'}
        />
        {response !== null && this.renderIssuedPasses(response.data)}
      </View>
    );
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
      </View>
    );
  }

  keyExtractor(item: Company, index: number): string {
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
      new Params()
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
  getPassesResponse: rootReducer.getPassesReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  getPasses: (authorization: string, params: Params) => dispatch(getPasses(authorization, params))
});

export const issuedPassesScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(IssuedPassesScreen);
