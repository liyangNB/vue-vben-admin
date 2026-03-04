/**
 * 项目分页VO
 * @export
 * @interface ProjectPageVO
 */
interface ProjectPageVO {
  /**
   * 编号
   * @type {string}
   * @memberof ProjectPageVO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof ProjectPageVO
   */
  id?: string;
  /**
   * 负责人
   * @type {string}
   * @memberof ProjectPageVO
   */
  master?: string;
  /**
   * 名称
   * @type {string}
   * @memberof ProjectPageVO
   */
  name?: string;
  /**
   * 类型
   * @type {string}
   * @memberof ProjectPageVO
   */
  type?: string;
}

export type { ProjectPageVO };
