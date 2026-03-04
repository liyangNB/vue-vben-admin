/**
 * OA申请模版详情VO
 * @export
 * @interface TemplateDetailsVO
 */
interface TemplateDetailsVO {
  /**
   * 编号
   * @type {string}
   * @memberof TemplateDetailsVO
   */
  code?: string;
  /**
   * 钉钉组件数据结构, json格式
   * @type {string}
   * @memberof TemplateDetailsVO
   */
  dingComponentData?: string;
  /**
   * 主键
   * @type {number}
   * @memberof TemplateDetailsVO
   */
  id?: number;
  /**
   * 名称
   * @type {string}
   * @memberof TemplateDetailsVO
   */
  name?: string;
  /**
   * 本地路径
   * @type {string}
   * @memberof TemplateDetailsVO
   */
  path?: string;
  /**
   * 备注
   * @type {string}
   * @memberof TemplateDetailsVO
   */
  remark?: string;
  /**
   * 网络路径
   * @type {string}
   * @memberof TemplateDetailsVO
   */
  url?: string;
}

export type { TemplateDetailsVO };
