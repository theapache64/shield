import { default as React, PureComponent, ReactElement } from 'react';
import { TextInput, View, Text } from 'react-native';
import { CustomPicker } from '../../../../guerilla/widgets/custom_picker/CustomPicker';
import { InputWrapper } from '../../../../guerilla/widgets/custom_picker/InputWrapper';
import { PassType } from '../../../../models/PassType';
import { Validateable } from '../../../../guerilla/utils/InputValidator';
import { materialColors } from '../../../../guerilla/res/MaterialColors';
import { Pass as PassModel } from '../../../../models/Pass';

export interface Props {
}

interface States {
  serialNo: string;
  errorMessage: string;
}

const PASS_TYPES: PassType[] = [
  new PassType('VISITOR'),
  new PassType('WORKER'),
];

export class UIPass extends PureComponent<Props, States> implements Validateable {

  isTriedSubmit: boolean = false;
  cpType = React.createRef<CustomPicker>();

  state = {
    serialNo: '',
    errorMessage: ''
  };
  getPass(): PassModel {
    return new PassModel(
      this.state.serialNo,
      this.cpType.current.getSelectedValue()
    );
  }

  validate(): boolean {
    this.isTriedSubmit = true;
    const isValid = this.state.serialNo.length !== 0;
    this.setState({ errorMessage: isValid ? '' : 'Invalid Serial No.' });
    return isValid;
  }

  render(): ReactElement<any> {

    return (
      <View
        flexDirection={'row'}
        alignItems={'flex-start'}
      >

        {/* Nos */}
        <InputWrapper
          style={{ marginRight: 5 }}
        >
          {/* Input */}
          <TextInput
            onChangeText={this.onSerialNoChanged}
            value={this.state.serialNo}
            style={{ fontSize: 15 }}
            placeholder={'Serial No'}
            keyboardType={'numeric'}
          />

          {this.state.errorMessage.length !== 0 && this.renderError()}

        </InputWrapper>

        {/* Type */}
        <CustomPicker
          ref={this.cpType}
          placeholder={'Select type'}
          data={PASS_TYPES}
          defaultValue={PASS_TYPES[0].label()}
          title={'Type'}
        />

      </View >
    );
  }
  onSerialNoChanged = (newVal: string) => {

    this.setState(
      {
        serialNo: newVal
      },
      () => {
        if (this.isTriedSubmit) {
          this.validate();
        }
      }
    );
  }
  renderError = () => (
    <Text style={{ color: materialColors.RED[500] }}>{this.state.errorMessage}</Text>
  )
}
