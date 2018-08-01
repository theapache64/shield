import { default as React, ReactElement } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import { BaseScreen } from './BaseScreen';
import { Guerilla } from '../../Guerilla';

const styles = StyleSheet.create({
  vContainer: {
    flex: 1,
    backgroundColor: '#FFF'
  }
});

export abstract class BaseStyledScreen<P= {}, S= {}, NP= {}> extends BaseScreen<P, S, NP> {

  primaryColor: string = Guerilla.getInstance().getColorPrimary();
  primaryColorDark: string = Guerilla.getInstance().getColorPrimaryDark();
  abstract renderStyledScreen(): ReactElement<any>;

  render(): ReactElement<any> {
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
        backgroundColor={this.primaryColorDark}
      />
    );
  }

  renderAndroidStatusBar(): any {
    return (
      <StatusBar barStyle={'light-content'} backgroundColor={this.primaryColorDark} />
    );
  }
}
