/**
 * 添加OA申请模版AO
 * @export
 * @interface TemplateAddAO
 */
interface TemplateAddAO {
  /**
   * 编号
   * @type {string}
   * @memberof TemplateAddAO
   */
  code: string;
  /**
   * 钉钉组件数据结构, json格式
   * @type {string}
   * @memberof TemplateAddAO
   */
  dingComponentData?: string;
  /**
   * 名称
   * @type {string}
   * @memberof TemplateAddAO
   */
  name: string;
  /**
   * 本地路径
   * @type {string}
   * @memberof TemplateAddAO
   */
  path?: string;
  /**
   * 备注
   * @type {string}
   * @memberof TemplateAddAO
   */
  remark?: string;
  /**
   * 网络路径
   * @type {string}
   * @memberof TemplateAddAO
   */
  url?: string;
}

export type { TemplateAddAO };
