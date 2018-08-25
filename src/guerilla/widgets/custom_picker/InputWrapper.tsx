import { default as React, ReactElement } from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { materialColors } from '../../res/MaterialColors';

interface PropTypes {
  style?: StyleProp<ViewStyle>;
  children?: any;
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: materialColors.GREY[100],
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
});

export class InputWrapper extends React.Component<PropTypes> {
  render(): ReactElement<any> {
    const { style, ...otherProps } = this.props;
    return (
      <View
        style={[styles.wrapper, style]}
        {...otherProps}
      >
        {this.props.children}
      </View>
    );
  }
}
