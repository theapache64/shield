import { Type, Expose } from 'class-transformer';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Sun Aug 26 13:15:38 UTC 2018
*/
export class Data {

  @Type(() => Pass)
  @Expose({ name: 'pass' })
  readonly pass: Pass;

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

export class RevokePassResponse extends BaseAPIResponse {
  @Type(() => Data)
  readonly data: Data;
}
