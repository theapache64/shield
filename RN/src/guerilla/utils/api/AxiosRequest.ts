export interface AxiosRequestType {
  type: string;
  payload: {
    request: {
      method: string,
      url: string,
      data?: {}
      headers?: {
        Authorization?: string
      }
    }
  };
}

export class AxiosRequest {

  public static build =
    (type: string, method: string, url: string, data?: {}, authorization?: string)
      : AxiosRequestType => {
      return {
        type,
        payload: {
          request: {
            method,
            url,
            data,
            headers: {
              Authorization: authorization
            }
          },
        },
      };
    }
}
