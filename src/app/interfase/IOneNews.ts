import { IComment } from "./IComment";

export interface IOneNews {
  author: string;
  children: IComment[];
  created_at: string;
  created_at_i: number;
  id: number;
  options: [];
  parent_id: null;
  points: number;
  story_id: number;
  text: null;
  title: string;
  type: string;
  url: string;
}
