import { default as React, PureComponent, ReactElement } from 'react';
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

export abstract class BaseStyledScreen<P= {}, S= {}> extends PureComponent<P, S> {
  abstract renderStyledScreen(): ReactElement<any>;
  abstract primaryColor: string;

  render() {
    return (
      <View style={styles.vContainer}>
        {Platform.OS === 'android' && this.renderAndroidStatusBar()}
        {this.renderStyledScreen()}
      </View>
    );
  }

  renderAndroidStatusBar(): any {
    return (
      <StatusBar barStyle={'light-content'} backgroundColor={this.primaryColor} />
    );
  }
}
