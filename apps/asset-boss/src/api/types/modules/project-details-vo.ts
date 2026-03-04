/**
 * 项目详情VO
 * @export
 * @interface ProjectDetailsVO
 */
interface ProjectDetailsVO {
  /**
   * 编号
   * @type {string}
   * @memberof ProjectDetailsVO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof ProjectDetailsVO
   */
  id?: string;
  /**
   * 负责人
   * @type {string}
   * @memberof ProjectDetailsVO
   */
  master?: string;
  /**
   * 名称
   * @type {string}
   * @memberof ProjectDetailsVO
   */
  name?: string;
  /**
   * 备注
   * @type {string}
   * @memberof ProjectDetailsVO
   */
  remark?: string;
  /**
   * 类型
   * @type {string}
   * @memberof ProjectDetailsVO
   */
  type?: string;
}

export type { ProjectDetailsVO };
