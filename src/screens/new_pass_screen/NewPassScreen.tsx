import { default as React, PureComponent, ReactElement } from 'react';
import { View } from 'react-native';
import { GuerillaText } from '../../guerilla/widgets/guerialla_text/GuerillaText';
import { connect } from 'react-redux';
import { RootReducer } from '../../reducers/RootReducer';
import { Dispatch } from 'redux';
import { loadIssuePass } from '../../api/routes/LoadIssuePass';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { LoadIssuePassResponse } from '../../api/responses/LoadIssuePassResponse';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';

interface Props {
  title: string;
}

interface States {

}

class NewPassScreen
  extends BaseNetworkShieldScreen<
  LoadIssuePassResponse,
  Props,
  States
  > {

  renderNetworkShieldScreen(response: LoadIssuePassResponse): ReactElement<any> {
    throw new Error('Method not implemented.');
  }

  load(): void {
    throw new Error('Method not implemented.');
  }

  getResponseType(): any {
    throw new Error('Method not implemented.');
  }

  getResponse(): NetworkResponse<LoadIssuePassResponse> {
    throw new Error('Method not implemented.');
  }

}

const mapStateToProps = (rootReducer: RootReducer) => ({
  guardReducer: rootReducer.guardReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadIssuePass: (apiKey: string) => dispatch(loadIssuePass(apiKey))
});

export const newPassScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPassScreen);
