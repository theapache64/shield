import { Component, default as React, ReactElement } from 'react';
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View, Alert } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

import { materialColors } from '../res/MaterialColors';
import { NetworkResponse } from '../utils/api/NetworkResponse';
import { GuerillaText } from '../widgets/guerialla_text/GuerillaText';
import { Guerilla } from '../Guerilla';
import { Input } from '../widgets/Input';

interface Props {
  response: NetworkResponse<any>;
  loadingMessage?: string;
  onRetryPressed?: () => void;
  hasHeaderMargin?: boolean;
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
    opacity: 0.8,
    elevation: Input.ELEVATION + 1,
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
    color: materialColors.GREY[700]
  },
  bRetry: {
    marginTop: 10,
    alignSelf: 'center'
  }
});

export class NetworkProgressOverlay extends Component<Props> {

  static defaultProps = {
    loadingMessage: 'Loading ...',
    headerMargin: false,
  };

  colorPrimary: string;

  constructor(props: Props) {
    super(props);

    this.colorPrimary = Guerilla.getInstance().getColorPrimary();
  }

  render(): ReactElement<any> {

    console.log('NetworkProgressOverlay rendered');

    // Destruct params
    const { response, loadingMessage, hasHeaderMargin, onRetryPressed } = this.props;

    if (response.errorMessage && !this.props.onRetryPressed) {
      // No retry
      Alert.alert('Error', response.errorMessage);
      return null;
    }

    // Either loading or error
    const isVisible =
      // Loading 
      (response.isLoading) ||
      // Error with retry button
      (onRetryPressed && response.errorMessage);

    if (!isVisible) {
      // Render nothing
      return null;
    }

    return (
      <View style={[styles.container, hasHeaderMargin && { marginTop: 56 }]}>
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
          color={this.colorPrimary}
        />
        <GuerillaText style={styles.loadingMessage}>
          {message}
        </GuerillaText>
      </View >
    );
  }

  renderError = (message: string) => {

    return (
      <View style={styles.vError}>
        <SimpleLineIcons
          size={25}
          style={styles.iError}
          name={'exclamation'}
        />
        <GuerillaText style={styles.tError}>{message}</GuerillaText>

        {/*Retry button*/}
        <TouchableOpacity
          style={styles.bRetry}
          onPress={this.props.onRetryPressed}
        >
          <GuerillaText style={{ color: this.colorPrimary }}>
            RETRY
          </GuerillaText>
        </TouchableOpacity>
      </View>
    );
  }
}
