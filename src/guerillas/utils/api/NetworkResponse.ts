export class NetworkResponse<T> {
  public readonly isLoading: boolean;
  public readonly response: T;
  public readonly isSuccess: boolean;
  public readonly successMessage: string;
  public readonly errorMessage: string;

  constructor(
    isLoading: boolean,
    response: T,
    isSuccess: boolean,
    successMessage: string,
    errorMessage: string
  ) {
    this.isLoading = isLoading;
    this.response = response;
    this.isSuccess = isSuccess;
    this.successMessage = successMessage;
    this.errorMessage = errorMessage;
  }
}
