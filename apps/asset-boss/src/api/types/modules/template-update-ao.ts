/**
 * OA申请模版更新AO
 * @export
 * @interface TemplateUpdateAO
 */
interface TemplateUpdateAO {
  /**
   * 主键
   * @type {number}
   * @memberof TemplateUpdateAO
   */
  id: number;
  /**
   * 编号
   * @type {string}
   * @memberof TemplateUpdateAO
   */
  code?: string;
  /**
   * 钉钉组件数据结构, json格式
   * @type {string}
   * @memberof TemplateUpdateAO
   */
  dingComponentData?: string;
  /**
   * 名称
   * @type {string}
   * @memberof TemplateUpdateAO
   */
  name?: string;
  /**
   * 本地路径
   * @type {string}
   * @memberof TemplateUpdateAO
   */
  path?: string;
  /**
   * 备注
   * @type {string}
   * @memberof TemplateUpdateAO
   */
  remark?: string;
  /**
   * 网络路径
   * @type {string}
   * @memberof TemplateUpdateAO
   */
  url?: string;
}

export type { TemplateUpdateAO };
