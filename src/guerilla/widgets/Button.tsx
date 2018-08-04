import { Component, default as React, ReactElement } from 'react';
import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import { materialColors } from '../res/MaterialColors';
import { GuerillaText } from './guerialla_text/GuerillaText';

interface Props extends TouchableOpacityProps {
  title: string;
  textStyle?: TextStyle;
}

interface States {

}

const styles = StyleSheet.create({
  toContainer: {
    width: '50%',
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 8,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: materialColors.GREY[300]
  },
  tTitle: {
    fontWeight: 'bold'
  }
});

export class Button extends Component<Props, States> {
  render(): ReactElement<Props> {

    const {
      style,
      title,
      ...otherProps
    } = this.props;

    return (
      <TouchableOpacity style={[styles.toContainer, style]} {...otherProps}>
        <GuerillaText style={[styles.tTitle, this.props.textStyle]}>{title}</GuerillaText>
      </TouchableOpacity >
    );
  }
}
