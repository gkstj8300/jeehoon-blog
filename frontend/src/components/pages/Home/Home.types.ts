export type Sort = 'desc' | 'asc';

export type SearchType = {
    keyword?: string;
    sort?: Sort;
    tag?: string;
};
