import { default as React, ReactElement } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { LoadIssuePassResponse, Data } from '../../api/responses/LoadIssuePassResponse';
import { loadIssuePass } from '../../api/routes/LoadIssuePass';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { GuardReducer } from '../../reducers/GuardReducer';
import { Header } from '../../guerilla/widgets/header/Header';

interface DispatchProps {
  guardReducer: GuardReducer;
  loadIssuePass: (apiKey: string) => void;
  loadIssuePassResponse: NetworkResponse<LoadIssuePassResponse>;
}

interface Props {
  title: string;
}

interface States {

}

class NewPassScreen
  extends BaseNetworkShieldScreen<
  LoadIssuePassResponse,
  Props & DispatchProps,
  States
  > {

  renderNetworkShieldScreen(response: LoadIssuePassResponse): ReactElement<any> {
    return (
      <View flex={1}>
        {/* Header */}
        <Header
          title={'Issue New Pass'}
          backNavigation={true}
          navigation={this.props.navigation}
        />

        {response && this.renderContent(response.data)}

      </View>
    );
  }
  renderContent(data: Data): any {
    return (
      <Text>{data.companies[0].name}</Text>
    );
  }

  hasHeaderMargin(): boolean {
    return true;
  }

  load(): void {
    this.props.loadIssuePass(
      this.props.guardReducer.guard.apiKey
    );
  }

  getResponseType(): any {
    return LoadIssuePassResponse;
  }

  getResponse(): NetworkResponse<LoadIssuePassResponse> {
    return this.props.loadIssuePassResponse;
  }

  componentDidMount(): void {
    this.load();
  }

}

const mapStateToProps = (rootReducer: RootReducer) => ({
  guardReducer: rootReducer.guardReducer,
  loadIssuePassResponse: rootReducer.loadIssuePassReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadIssuePass: (apiKey: string) => dispatch(loadIssuePass(apiKey))
});

export const newPassScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPassScreen);
