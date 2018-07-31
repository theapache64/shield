export class BaseAction<P= {}> {
  constructor(
    public readonly type: string,
    public readonly payload: P,
    public readonly error?: string
  ) { }
}
