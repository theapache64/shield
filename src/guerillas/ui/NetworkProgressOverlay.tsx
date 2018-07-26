import { Component, default as React } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

import { materialColors } from '../res/MaterialColors';
import { NetworkResponse } from '../utils/api/NetworkResponse';

interface Props {
  response: NetworkResponse<any>;
  loadingMessage?: string;
  colorPrimary: string;
  onRetryPressed: () => void;
}

interface States {

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 999,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#FFF',
    marginTop: 56, // header height
    opacity: 0.8
  },
  loadingMessage: {
    marginTop: 10,
  },

  vError: {
    alignItems: 'center',
  },
  iError: {
    color: materialColors.RED[500]
  },
  tError: {
    marginTop: 10,
    color: materialColors.GREY[400]
  },
  bRetry: {
    alignSelf: 'center'
  }
});

export class NetworkProgressOverlay extends Component<Props, States> {

  static defaultProps = {
    loadingMessage: 'Loading ...',
  };

  render() {

    console.log('NetworkProgressOverlay rendered');

    // Destruc params
    const { response, loadingMessage } = this.props;

    // Either loading or error
    const isVisible = response.isLoading || response.errorMessage;

    if (!isVisible) {
      // Render nothing
      return <View />;
    }

    return (
      <View style={styles.container}>
        {/*Loading*/}
        {response.isLoading && this.renderLoading(loadingMessage)}

        {/*Error*/}
        {response.errorMessage && this.renderError(response.errorMessage)}
      </View>
    );
  }

  renderLoading = (message: string) => {
    return (
      <View>
        <ActivityIndicator
          size={'large'}
          color={this.props.colorPrimary}
        />
        <Text style={styles.loadingMessage}>{message}</Text>
      </View>
    );
  }

  renderError = (message: string) => {

    return (
      <View style={styles.vError}>
        <SimpleLineIcons style={styles.iError} name={'ios-alert'} />
        <Text style={styles.tError}>{message}</Text>

        {/*Retry button*/}
        <TouchableOpacity
          style={styles.bRetry}
          onPress={this.props.onRetryPressed}
        >
          <Text>RETRY</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
