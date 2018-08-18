import { default as React, PureComponent, ReactElement } from 'react';
import {
  Alert, StyleSheet, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle
} from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';

import { materialColors } from '../res/MaterialColors';
import { Validateable } from '../utils/InputValidator';

interface Props extends TextInputProps {
  leftIcon: string;
  regEx?: RegExp;
  containerStyle?: ViewStyle;
}

interface States {
  value: string;
  errorMessage: string;
}

const InputElevation = 4;

const styles = StyleSheet.create({
  vContainer: {
    alignItems: 'center',
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderColor: materialColors.GREY[200],
    borderWidth: 2,
    borderRadius: 10,
    // Android shadow
    elevation: InputElevation,
  },

  tiMain: {
    flex: 1,
    padding: 10
  },

  sliUser: {
    marginLeft: 10,
    marginRight: 5
  },

  sliClose: {
    color: materialColors.ORANGE[500],
    marginRight: 10,
    marginLeft: 5,
  }
});

export class Input extends PureComponent<Props, States> implements Validateable {

  static defaultProps = {
    regEx: '.+',
  };
  static ELEVATION: number = InputElevation;

  state = {
    value: '',
    errorMessage: ''
  };

  render(): ReactElement<any> {

    // Props
    const {
      leftIcon,
      ...otherProps
    } = this.props;

    return (
      <View style={[styles.vContainer, this.props.containerStyle]}>

        {/* Icon */}
        <SimpleLineIcons name={leftIcon} size={15} style={styles.sliUser} />

        {/* Input */}
        <TextInput
          style={styles.tiMain}
          value={this.state.value}
          onChangeText={this.onChangeText}
          {...otherProps}
        />

        {/* Error Icon */}
        {this.hasError() && this.renderErrorIcon()}

      </View >
    );
  }
  renderErrorIcon(): any {
    return (
      <TouchableOpacity onPress={this.onErrorClicked}>
        <SimpleLineIcons name={'info'} size={15} style={styles.sliClose} />
      </TouchableOpacity>
    );
  }

  onChangeText = (text: string) => {
    this.setState({ value: text }, () => { this.validate(); });
  }

  onErrorClicked = () => {
    Alert.alert('', this.state.errorMessage);
  }

  validate(): boolean {

    const { value } = this.state;
    const { regEx, placeholder } = this.props;

    const regExp = new RegExp(regEx);
    const isValid = regExp.test(value);

    if (isValid) {
      // Removing error if exists
      if (this.hasError()) {
        this.setState({ errorMessage: '' });
      }
      return true;
    }

    this.setState({ errorMessage: 'Invalid ' + (placeholder).toLowerCase() });
    return false;
  }

  hasError(): boolean {
    return this.state.errorMessage.trim().length > 0;
  }

  getValue(): string {
    return this.state.value;
  }

}
