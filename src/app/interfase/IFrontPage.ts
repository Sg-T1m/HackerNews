import { INews } from './IFrontPage/INews';
import { IProcessingTimingsMS } from './IFrontPage/IProcessingTimingsMS';
import { IExhaustive } from './IFrontPage/IExhaustive';

export interface iFrontPage {
  exhaustive: IExhaustive;
  exhaustiveNbHits: boolean;
  exhaustiveTypo: boolean;
  hits: INews[];
  hitsPerPage: number;
  nbHits: number;
  nbPages: number;
  page: number;
  params: string;
  processingTimeMS: number;
  processingTimingsMS: IProcessingTimingsMS;
  query: string;
  serverTimeMS: number;
}
