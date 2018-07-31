import { default as React } from 'react';
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

interface Props {
}

interface DispatchProps {
  loadHome: () => void;
  loadHomeReducer: NetworkResponse<LoadHomeResponse>;
}

interface States {

}

class MainScreen extends BaseNetworkShieldScreen<LoadHomeResponse, Props & DispatchProps, States> {

  renderNetworkShieldScreen(response: LoadHomeResponse) {
    return (
      <View>
        <Header
          title={'Home'}
        />
      </View>
    );
  }

  load(): void {
    this.props.loadHome();
  }
  getResponseType() {
    return LoadHomeResponse;
  }

  getResponse(): NetworkResponse<LoadHomeResponse> {
    return this.props.loadHomeReducer;
  }

  componentDidMount() {
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
