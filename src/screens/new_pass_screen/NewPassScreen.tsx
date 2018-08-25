import { default as React, ReactElement } from 'react';
import { Text, View, ScrollView, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { LoadIssuePassResponse, Data } from '../../api/responses/LoadIssuePassResponse';
import { loadIssuePass } from '../../api/routes/LoadIssuePass';
import { NetworkResponse } from '../../guerilla/utils/api/NetworkResponse';
import { RootReducer } from '../../reducers/RootReducer';
import { BaseNetworkShieldScreen } from '../base/BaseNetworkShieldScreen';
import { GuardReducer } from '../../reducers/GuardReducer';
import { Header } from '../../guerilla/widgets/header/Header';
import { CustomPicker } from '../../guerilla/widgets/custom_picker/CustomPicker';
import { Button } from '../../guerilla/widgets/Button';
import { InputValidator } from '../../guerilla/utils/InputValidator';
import { Passes } from './widgets/passes/Passes';
import { classToPlain } from 'class-transformer';
import { Pass } from '../../models/Pass';

interface DispatchProps {
  guardReducer: GuardReducer;
  loadIssuePass: (apiKey: string) => void;
  loadIssuePassResponse: NetworkResponse<LoadIssuePassResponse>;
}

interface Props {
  title: string;
}

interface States {
  companyId: string;
}

interface NavProps {
  count: number;
}

class NewPassScreen
  extends BaseNetworkShieldScreen<
  LoadIssuePassResponse,
  Props & DispatchProps,
  States,
  NavProps
  > {

  cpCompany = React.createRef<CustomPicker>();
  pPasses = React.createRef<Passes>();

  inputValidator: InputValidator;

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

    const count = this.props.navigation.getParam('count');

    return (
      <ScrollView
        keyboardShouldPersistTaps={'always'}
        contentContainerStyle={{ margin: 5 }}
      >
        {/* Company */}
        <CustomPicker
          ref={this.cpCompany}
          title={'Select Company'}
          placeholder={'Select a company'}
          data={data.companies}
        />

        <Text style={{ marginBottom: 8 }}>Passes</Text>

        {/* Passes */}
        <Passes
          ref={this.pPasses}
          count={count}
        />

        <Button
          title={'ISSUE PASS' + (count > 1 ? 'ES' : '')}
          style={{ marginBottom: 8 }}
          onPress={this.onIssuePassPressed}
        />
      </ScrollView>
    );
  }

  onIssuePassPressed = () => {

    // Hiding keyboard
    Keyboard.dismiss();

    if (this.inputValidator == null) {
      this.inputValidator = new InputValidator(
        [
          this.cpCompany.current!,
          this.pPasses.current!
        ]
      );
    }

    if (this.inputValidator.isAllValid(true)) {
      const passesJson = classToPlain<Pass>(this.pPasses.current.getPasses());
      
    }
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
