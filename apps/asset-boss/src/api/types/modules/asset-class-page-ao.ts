import type { PageAO } from '../common';

/**
 * 资产分类分页查询AO
 * @export
 * @interface AssetClassPageAO
 */
interface AssetClassPageAO extends PageAO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetClassPageAO
   */
  code?: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetClassPageAO
   */
  name?: string;
  /**
   * 父分类ID
   * @type {string}
   * @memberof AssetClassPageAO
   */
  parentId?: string;
}

export type { AssetClassPageAO };
