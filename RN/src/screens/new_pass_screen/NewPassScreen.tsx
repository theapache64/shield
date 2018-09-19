import { default as React, ReactElement } from 'react';
import { Text, View, ScrollView, Keyboard, TextInput, Alert } from 'react-native';
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
import { InputWrapper } from '../../guerilla/widgets/custom_picker/InputWrapper';
import { Params, issuePass } from '../../api/routes/IssuePass';
import { IssuePassResponse } from '../../api/responses/IssuePassResponse';
import { NetworkProgressOverlay } from '../../guerilla/ui/NetworkProgressOverlay';
import { ToolbarMenuItem } from '../../guerilla/models/ToolbarMenuItem';
import { NumberUtils } from '../../guerilla/utils/NumberUtils';

interface DispatchProps {
  guardReducer: GuardReducer;
  loadIssuePass: (apiKey: string) => void;
  issuePass: (authorization: string, params: Params) => void;
  loadIssuePassResponse: NetworkResponse<LoadIssuePassResponse>;
  issuePassResponse: NetworkResponse<IssuePassResponse>;
}

interface Props {
  title: string;
}

interface States {
  description: string;
}

export interface NavProps {
  count: number;
}

const MENU_ICONS: ToolbarMenuItem[] = [
  new ToolbarMenuItem(NumberUtils.getRandomId(), 'check')
];

class NewPassScreen
  extends BaseNetworkShieldScreen<
  LoadIssuePassResponse,
  Props & DispatchProps,
  States,
  NavProps
  > {

  state = {
    description: ''
  };

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
          menuIcons={MENU_ICONS}
          onMenuItemPressed={this.onToolbarMenuItemPressed}
        />

        {response && this.renderContent(response.data)}

      </View>
    );
  }

  onToolbarMenuItemPressed = (menuItem: ToolbarMenuItem) => {
    if (menuItem.id === MENU_ICONS[0].id) {
      this.onIssuePassPressed();
    }
  }
  onDescriptionChanged = (newVal: string) => {
    this.setState({ description: newVal });
  }
  renderContent(data: Data): any {

    const count = this.props.navigation.getParam('count');

    return (
      <View flex={1}>
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

          {/* Description */}
          <InputWrapper>
            <TextInput
              onChangeText={this.onDescriptionChanged}
              value={this.state.description}
              style={{ textAlignVertical: 'top' }}
              placeholder={'Description'}
              numberOfLines={3}
              multiline={true}
            />
          </InputWrapper>

        </ScrollView>

        <NetworkProgressOverlay
          response={this.props.issuePassResponse}
        />
      </View>
    );
  }

  componentWillReceiveProps(newProps: DispatchProps): void {
    if (newProps.issuePassResponse.isSuccess) {
      if (!newProps.issuePassResponse.response.error) {
        Alert.alert('Success', newProps.issuePassResponse.response.message, [
          {
            text: 'OK',
            onPress: () => {
              this.props.navigation.goBack();
            }
          }
        ]);
      } else {
        Alert.alert('Failed', newProps.issuePassResponse.response.message);
      }
    }
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

      this.props.issuePass(
        this.props.guardReducer.guard.apiKey,
        new Params(
          this.cpCompany.current.getSelectedValue(),
          JSON.stringify(passesJson),
          this.state.description
        )
      );
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
  loadIssuePassResponse: rootReducer.loadIssuePassReducer,
  issuePassResponse: rootReducer.issuePassReducer
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadIssuePass: (apiKey: string) => dispatch(loadIssuePass(apiKey)),
  issuePass: (authorization: string, params: Params) => dispatch(issuePass(authorization, params))
});

export const newPassScreen = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewPassScreen);
