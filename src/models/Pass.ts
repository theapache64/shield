import { Expose } from 'class-transformer';

export class Pass {

  @Expose({ name: 'no' })
  readonly serialNo: string;
  
  @Expose({ name: 'type' })
  readonly type: string;

  constructor(serialNo: string, type: string) {
    this.serialNo = serialNo;
    this.type = type;
  }

}
