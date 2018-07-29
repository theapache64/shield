export interface AxiosRequestType {
  type: string;
  payload: {
    request: {
      method: string,
      url: string,
      data?: {}
    }
  };
}

export class AxiosRequest {

  public static build =
    (type: string, method: string, url: string, data?: {}): AxiosRequestType => {
      return {
        type,
        payload: {
          request: {
            method,
            url,
            data,
          },
        },
      };
    }
}
