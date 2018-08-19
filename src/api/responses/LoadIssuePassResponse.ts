import { Type, Expose } from 'class-transformer';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Sun Aug 19 10:55:02 UTC 2018
*/
export class Data {

  @Type(() => Company)
  @Expose({ name: 'companies' })
  readonly companies: Company[];

}

export class Company {

  @Expose({ name: 'id' })
  readonly id: string;

  @Expose({ name: 'name' })
  readonly name: string;

}

export class LoadIssuePassResponse extends BaseAPIResponse {
  @Type(() => Data)
  readonly data: Data;
}
