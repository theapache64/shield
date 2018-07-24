import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';
import { BaseScreen } from './BaseScreen';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

export abstract class BaseStyledScreen<P= {}, S= {}> extends BaseScreen<P, S> {
  abstract renderStyledScreen(): ReactElement<any>;
  abstract primaryColor: string;

  render() {
    return (
      <View style={styles.vContainer}>
        {Platform.OS === 'android' && this.renderAndroidStatusBar()}
        {Platform.OS === 'ios' && this.renderIOSStatusBar()}
        {this.renderStyledScreen()}
      </View>
    );
  }

  renderIOSStatusBar(): any {
    return (
      <View
        width={'100%'}
        height={20}
        backgroundColor={this.primaryColor}
      />
    );
  }

  renderAndroidStatusBar(): any {
    return (
      <StatusBar barStyle={'light-content'} backgroundColor={this.primaryColor} />
    );
  }
}
