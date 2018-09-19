import { Type, Expose } from 'class-transformer';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';
import { Pickable } from '../../guerilla/widgets/custom_picker/CustomPicker';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Sun Aug 19 10:55:02 UTC 2018
*/
export class Data {

  @Type(() => Company)
  @Expose({ name: 'companies' })
  readonly companies: Company[];

}

export class Company implements Pickable {

  @Expose({ name: 'id' })
  readonly theId: string;

  @Expose({ name: 'name' })
  readonly name: string;
  
  id(): string {
    return this.theId;
  }
  label(): string {
    return this.name;
  }

}

export class LoadIssuePassResponse extends BaseAPIResponse {
  @Type(() => Data)
  readonly data: Data;
}
