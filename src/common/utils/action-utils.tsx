export interface Action<P> {
  readonly type: string;
  readonly payload?: P;
}

export function createAction<P>(type: string, payload: P): Action<P> {
  return { type, payload };
}
