import { default as React, PureComponent, ReactElement } from 'react';
import { Picker, Text, TextInputProps } from 'react-native';

import { materialColors } from '../../res/MaterialColors';
import { Validateable } from '../../utils/InputValidator';
import { InputWrapper } from './InputWrapper';

interface PropTypes extends TextInputProps {
  title: string;
  placeholder?: string;
  children?: any;
  onValueChange?: (stateKey: string, value: string, index: number) => void;
  defaultValue?: string;
  errorColor?: string;
  stateKey?: string;
  data?: Pickable[];
  optional?: boolean;
}

interface StateTypes {
  isValidated: boolean;
  selectedValue: string | number;
}

export interface Pickable {
  id(): string;
  label(): string;
}

export class CustomPicker extends PureComponent<PropTypes, StateTypes> implements Validateable {

  static defaultProps = {
    placeholder: 'Select an item',
    errorColor: materialColors.RED[500],
    optional: false
  };

  constructor(props: PropTypes) {
    super(props);

    this.state = {
      isValidated: true,
      selectedValue: props.defaultValue ? props.defaultValue : '',
    };

  }

  componentWillReceiveProps(props: PropTypes): void {

    const { selectedValue } = this.state;

    if (selectedValue && props.onValueChange) {

      // Getting index from data
      let index = -1;
      for (let i = 0; i < props.data.length; i += 1) {

        if (props.data[i].id() === selectedValue) {
          index = i;
          break;
        }
      }

      props.onValueChange(props.stateKey, selectedValue.toString(), index);
    }
  }

  validate = (): boolean => {

    if (this.state.selectedValue || this.props.optional) {
      this.setState({ isValidated: true });
      return true;
    }

    console.log(this.props.placeholder + ' is invalid');

    this.setState({ isValidated: false });
    return false;
  }

  render(): ReactElement<any> {

    const {
      placeholder, title, ...otherProps
    } = this.props;

    if (placeholder) {

      // With placeholder
      return (
        <InputWrapper>
          <Text style={{ fontSize: 13 }}>{title}</Text>
          <Picker
            {...otherProps}
            style={{ height: 30 }}
            onValueChange={this.onChangeValue}
            selectedValue={this.state.selectedValue}
          >
            <Picker.Item
              color={materialColors.GREY[400]}
              key={0}
              label={placeholder}
              value=""
            />

            {this.renderChildren()}
          </Picker>

          {/* Showing only if there's an error */}
          {(!this.state.isValidated && !this.state.selectedValue) && this.renderErrorText()}

        </InputWrapper>
      );

    }

    // Without placeholder
    return (
      <InputWrapper>
        <Text style={{ fontSize: 13 }}>{title}</Text>
        <Picker
          {...otherProps}
          style={{ height: 30 }}
          onValueChange={this.onChangeValue}
        >

          {this.renderChildren()}
        </Picker>
      </InputWrapper>
    );
  }
  renderChildren(): any {

    const { children, data } = this.props;

    // Checking if children exists
    if (children) {
      return children;
    }

    // If data exist
    if (data) {
      return data.map((item: Pickable, index: number) => (
        <Picker.Item
          key={index}
          color={materialColors.GREY[800]}
          value={item.id()}
          label={item.label()}
        />
      ));
    }
  }

  getSelectedValue = (): string => {
    return this.state.selectedValue && this.state.selectedValue.toString();
  }

  private onChangeValue = (value: string, index: number) => {

    const {
      onValueChange, placeholder,
    } = this.props;

    if (placeholder && index === 0) {
      return;
    }

    this.setState({ selectedValue: value });

    const finalValueIndex = placeholder ? index - 1 : index;
    if (onValueChange) {
      onValueChange(this.props.stateKey, value, finalValueIndex);
    }
  }

  private getErrorColor(): string {
    return this.props.errorColor == null
      ? materialColors.RED[500]
      : this.props.errorColor;
  }

  private renderErrorText = () => {
    return (
      <Text
        style={{ fontSize: 13, color: this.getErrorColor() }}
      >
        Please select an item
      </Text>
    );
  }
}
