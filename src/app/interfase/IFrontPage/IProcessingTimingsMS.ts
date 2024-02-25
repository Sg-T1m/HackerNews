import { IRequest } from './IRequest';

export interface IProcessingTimingsMS {
  _request: IRequest;
  total: number;
}
