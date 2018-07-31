import { Type, Expose } from 'class-transformer';
import { BaseAPIResponse } from '../../guerillas/utils/api/BaseAPIResponse';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Wed Jul 25 15:49:03 UTC 2018
*/
export class Data {

  @Type(() => Guard)
  @Expose({ name: 'guard' })
  readonly guard: Guard;

}

export class Guard {

  public static readonly KEY = 'guard';

  @Expose({ name: 'name' })
  readonly name: string;

  @Expose({ name: 'api_key' })
  readonly apiKey: string;

}

export class LogInResponse extends BaseAPIResponse {
  @Type(() => Data)
  readonly data: Data;
}
