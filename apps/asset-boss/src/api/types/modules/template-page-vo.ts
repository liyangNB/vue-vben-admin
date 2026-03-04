/**
 * OA申请模版分页VO
 * @export
 * @interface TemplatePageVO
 */
interface TemplatePageVO {
  /**
   * 编号
   * @type {string}
   * @memberof TemplatePageVO
   */
  code?: string;
  /**
   * 主键
   * @type {number}
   * @memberof TemplatePageVO
   */
  id?: number;
  /**
   * 名称
   * @type {string}
   * @memberof TemplatePageVO
   */
  name?: string;
  /**
   * 本地路径
   * @type {string}
   * @memberof TemplatePageVO
   */
  path?: string;
  /**
   * 网络路径
   * @type {string}
   * @memberof TemplatePageVO
   */
  url?: string;
}

export type { TemplatePageVO };
