import { Type, Expose } from 'class-transformer';
import { BaseAPIResponse } from '../../guerilla/utils/api/BaseAPIResponse';

/**
* Generated using MockAPI (https://github.com/theapache64/Mock-API) : Tue Jul 31 14:38:50 UTC 2018
*/
export class Data {

  @Expose({ name: 'total_workers_in' })
  readonly totalWorkersIn: number;

  @Expose({ name: 'total_visitors_in' })
  readonly totalVisitorsIn: number;

}

export class LoadHomeResponse extends BaseAPIResponse {
  @Type(() => Data)
  readonly data: Data;
}
