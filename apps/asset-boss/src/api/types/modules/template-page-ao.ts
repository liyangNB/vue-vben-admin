/**
 * 查询OA申请模版分页列表AO
 * @export
 * @interface TemplatePageAO
 */
interface TemplatePageAO {
  /**
   * 当前页数
   * @type {number}
   * @memberof TemplatePageAO
   */
  pageNum?: number;
  /**
   * 页大小
   * @type {number}
   * @memberof TemplatePageAO
   */
  pageSize?: number;
  /**
   * 编号
   * @type {string}
   * @memberof TemplatePageAO
   */
  code?: string;
  /**
   * 名称
   * @type {string}
   * @memberof TemplatePageAO
   */
  name?: string;
  /**
   * 网络路径
   * @type {string}
   * @memberof TemplatePageAO
   */
  url?: string;
  /**
   * 本地路径
   * @type {string}
   * @memberof TemplatePageAO
   */
  path?: string;
}

export type { TemplatePageAO };
