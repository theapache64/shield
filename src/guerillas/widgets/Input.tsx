import { default as React, PureComponent } from 'react';
import { Alert, TextInput, TextInputProps, TouchableOpacity, View, ViewStyle } from 'react-native';
import { default as SimpleLineIcons } from 'react-native-vector-icons/SimpleLineIcons';
import { Validateable } from '../utils/InputValidator';
import { StyleSheet } from '../utils/StyleSheet';
import { materialColors } from '../res/MaterialColors';

interface Props extends TextInputProps {
  leftIcon: string;
  regEx?: RegExp;
  containerStyle?: ViewStyle;
}

interface States {
  value: string;
  errorMessage: string;
}

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
    elevation: 5,

    shadowColor: materialColors.GREY[800],
    shadowOffset: { width: 3, height: 6 },
    shadowRadius: 5,
    shadowOpacity: 0.5
  },

  tiMain: {
    flex: 1,
    padding:10
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

  state = {
    value: '',
    errorMessage: ''
  };

  static defaultProps = {
    regEx: '.+',
  };

  render() {

    // Props
    const {
      leftIcon,
      ...otherProps
    } = this.props;

    // State
    const { errorMessage } = this.state;

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
    const { regEx } = this.props;

    const regExp = new RegExp(this.props.regEx);
    const isValid = regExp.test(value);

    if (isValid) {
      // Removing error if exists
      if (this.hasError()) {
        this.setState({ errorMessage: '' });
      }
      return true;
    }

    this.setState({ errorMessage: 'Invalid ' + (this.props.placeholder).toLowerCase() });
    return false;
  }

  hasError(): boolean {
    return this.state.errorMessage.trim().length > 0;
  }

  getValue(): string {
    return this.state.value;
  }

}
