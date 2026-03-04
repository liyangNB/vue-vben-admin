import type { PageAO } from '../common';

/**
 * 项目分页查询AO
 * @export
 * @interface ProjectPageAO
 */
interface ProjectPageAO extends PageAO {
  /**
   * 编号
   * @type {string}
   * @memberof ProjectPageAO
   */
  code?: string;
  /**
   * 名称
   * @type {string}
   * @memberof ProjectPageAO
   */
  name?: string;
  /**
   * 类型
   * @type {string}
   * @memberof ProjectPageAO
   */
  type?: string;
  /**
   * 负责人
   * @type {string}
   * @memberof ProjectPageAO
   */
  master?: string;
}

export type { ProjectPageAO };
