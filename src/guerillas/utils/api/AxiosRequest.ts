interface AxiosRequestType {
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
  
  constructor(type: string, method: string, url: string, data?: {}) {
    return AxiosRequest.build(
      type,
      method,
      url,
      data
    );
  }
  
  private static build =
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
