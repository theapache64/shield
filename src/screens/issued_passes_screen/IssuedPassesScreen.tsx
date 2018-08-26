import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text, TextProps } from 'react-native';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { GetPassesResponse } from '../../api/responses/GetPassesResponse';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { connect } from 'react-redux';
import { rootReducer, RootReducer } from '../../reducers/RootReducer';
import { Dispatch } from 'redux';
import { Params, getPasses } from '../../api/routes/GetPasses';
import { GuardReducer } from '../../reducers/GuardReducer';
import { Header } from '../../guerilla/widgets/header/Header';

interface DispatchProps {
  guardReducer: GuardReducer;
  getPasses: (authorization: string, params: Params) => void;
  getPassesResponse: NetworkResponse<GetPassesResponse>;
}

interface Props {

}

interface States {

}

class IssuedPassesScreen extends BaseNetworkShieldScreen<
  GetPassesResponse,
  Props & DispatchProps,
  States
  > {
  renderNetworkShieldScreen(response: GetPassesResponse): ReactElement<any> {
    return (
      <View>
        <Header backNavigation={true} title={'Issued Passes'} />
        {response !== null && <Text>{response.data.companies[0].name}</Text>}
      </View>
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
