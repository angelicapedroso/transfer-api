export type IRequest = {
  payload: any
  params: any
  query: any
}

export type IResponse = {
  status: number
  payload: any
}

export type INext = {
  next(): void
}

export interface IController {
  handle(req: IRequest): Promise<IResponse>
}
