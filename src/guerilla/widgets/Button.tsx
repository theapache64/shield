import { Component, default as React } from 'react';
import { Text, TextStyle, TouchableOpacity, TouchableOpacityProps, StyleSheet } from 'react-native';
import { materialColors } from '../res/MaterialColors';

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
  render() {

    const {
      style,
      title,
      ...otherProps
    } = this.props;

    return (
      <TouchableOpacity style={[styles.toContainer, style]} {...otherProps}>
        <Text style={[styles.tTitle, this.props.textStyle]}>{title}</Text>
      </TouchableOpacity >
    );
  }
}
