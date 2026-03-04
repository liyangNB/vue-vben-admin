/**
 * 添加项目AO
 * @export
 * @interface ProjectAddAO
 */
interface ProjectAddAO {
  /**
   * 编号
   * @type {string}
   * @memberof ProjectAddAO
   */
  code: string;
  /**
   * 负责人
   * @type {string}
   * @memberof ProjectAddAO
   */
  master?: string;
  /**
   * 名称
   * @type {string}
   * @memberof ProjectAddAO
   */
  name: string;
  /**
   * 备注
   * @type {string}
   * @memberof ProjectAddAO
   */
  remark?: string;
  /**
   * 类型[product_dev：产品开发、odm：ODM、pre_research：预研、tech_dev：技术开发、oem：OEM、product_maintenance：产品维护、tech_maintenance：技术维护]
   * @type {string}
   * @memberof ProjectAddAO
   */
  type: string;
}

export type { ProjectAddAO };
