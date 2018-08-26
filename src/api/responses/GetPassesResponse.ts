import { Type, Expose } from 'class-transformer';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Sun Aug 26 10:58:21 UTC 2018
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

export class GetPassesResponse extends BaseAPIResponse {

  @Type(() => Data)
  readonly data: Data;

}
