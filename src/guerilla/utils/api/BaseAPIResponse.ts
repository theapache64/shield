import { Expose } from 'class-transformer';

export class BaseAPIResponse {

  @Expose({ name: 'error' })
  error: boolean;

  @Expose({ name: 'message' })
  message: string;

}
