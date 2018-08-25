import { Pickable } from '../guerilla/widgets/custom_picker/CustomPicker';

export class PassType implements Pickable {

  readonly pass: string;

  constructor(pass: string) {
    this.pass = pass;
  }

  id(): string {
    return this.pass;
  }

  label(): string {
    return this.pass;
  }

}
