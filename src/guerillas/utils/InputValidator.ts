import { Alert } from 'react-native';

export interface Validateable {
  validate(): boolean;
}

export class InputValidator {

  inputFields: Validateable[];
  // tslint:disable:max-line-length
  static REGEX_EMAIL: RegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(inputFields: Validateable[]) {
    this.inputFields = inputFields;
  }

  isAllValid = (isAlert: boolean): boolean => {
    let isAllInputValid: boolean = true;
    this.inputFields.forEach((inputField) => {
      if (inputField) {
        isAllInputValid = inputField.validate() && isAllInputValid;
      } else {
        throw new Error('Input field is null ');
      }
    });

    if (!isAllInputValid && isAlert) {
      Alert.alert('Error', 'Something wrong happened with the values you entered');
    }

    return isAllInputValid;
  }

}
