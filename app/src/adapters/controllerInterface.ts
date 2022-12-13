export type IRequest = {
  payload: any
  params: any
  query: any,
  headers: any
}

export type IResponse = {
  status: number
  payload: any
}

export type INext = {
  next(): void
}

export interface IController {
  handle(req: IRequest, next: INext): Promise<IResponse | undefined>
}
