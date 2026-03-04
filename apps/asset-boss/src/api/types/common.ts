interface PageAO {
  /**
   * 当前页数
   * @type {number}
   * @memberof PageAO
   */
  pageNum?: number;
  /**
   * 页大小
   * @type {number}
   * @memberof PageAO
   */
  pageSize?: number;
}

interface IPageOfPageVO<T> {
  current: number;
  pages: number;
  records: T[];
  size: number;
  total: number;
}

interface I1commandnames {
  code: string;
  name: string;
}

export type { I1commandnames, IPageOfPageVO, PageAO };
