export interface IComment {
    author: string;
    children: IComment[];
    created_at: string;
    created_at_i: number;
    id: number;
    options: [];
    parent_id: number;
    points: null | number;
    story_id: number;
    text: string;
    title: null | string;
    type: string;
    url: null| string
}
