/**
 * 项目更新AO
 * @export
 * @interface ProjectUpdateAO
 */
interface ProjectUpdateAO {
  /**
   * 编号
   * @type {string}
   * @memberof ProjectUpdateAO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof ProjectUpdateAO
   */
  id: string;
  /**
   * 负责人
   * @type {string}
   * @memberof ProjectUpdateAO
   */
  master?: string;
  /**
   * 名称
   * @type {string}
   * @memberof ProjectUpdateAO
   */
  name?: string;
  /**
   * 备注
   * @type {string}
   * @memberof ProjectUpdateAO
   */
  remark?: string;
  /**
   * 类型[product_dev：产品开发、odm：ODM、pre_research：预研、tech_dev：技术开发、oem：OEM、product_maintenance：产品维护、tech_maintenance：技术维护]
   * @type {string}
   * @memberof ProjectUpdateAO
   */
  type?: string;
}

export type { ProjectUpdateAO };
