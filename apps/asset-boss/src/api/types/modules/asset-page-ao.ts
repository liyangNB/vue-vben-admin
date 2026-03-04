import type { PageAO } from '../common';

/**
 * 资产分页查询AO
 * @export
 * @interface AssetPageAO
 */
interface AssetPageAO extends PageAO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetPageAO
   */
  code?: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetPageAO
   */
  name?: string;
  /**
   * 类型
   * @type {string}
   * @memberof AssetPageAO
   */
  type?: string;
  /**
   * 设备状态
   * @type {string}
   * @memberof AssetPageAO
   */
  state?: string;
  /**
   * 所属人
   * @type {string}
   * @memberof AssetPageAO
   */
  owner?: string;
  /**
   * 分类ID
   * @type {string}
   * @memberof AssetPageAO
   */
  classId?: string;
  /**
   * 项目ID
   * @type {string}
   * @memberof AssetPageAO
   */
  projectId?: string;
}

export type { AssetPageAO };
