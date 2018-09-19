import { Type, Expose } from 'class-transformer';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Sat Aug 25 03:34:47 UTC 2018
*/
export class Data {

  @Type(() => Pass)
  @Expose({ name: 'passes' })
  readonly passes: Pass[];

}

export class Pass {

  @Expose({ name: 'id' })
  readonly id: string;

  @Expose({ name: 'type' })
  readonly type: string;

  @Type(() => Guard)
  @Expose({ name: 'guard' })
  readonly guard: Guard;

}

export class Guard {

  @Expose({ name: 'name' })
  readonly name: string;

}

export class IssuePassResponse extends BaseAPIResponse {
  @Type(() => Data)
  readonly data: Data;
}
