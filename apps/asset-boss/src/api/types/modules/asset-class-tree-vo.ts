/**
 * 查询资产分类树形结构列表
 * @export
 * @interface AssetClassTreeVO
 */
interface AssetClassTreeVO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetClassTreeVO
   */
  code?: string;
  /**
   * 主键
   * @type {number}
   * @memberof AssetClassTreeVO
   */
  id?: number;
  /**
   * 名称
   * @type {string}
   * @memberof AssetClassTreeVO
   */
  name?: string;
  /**
   * 父分类ID
   * @type {string}
   * @memberof AssetClassTreeVO
   */
  parentId?: string;
  /**
   * 子分类列表
   * @type {AssetClassTreeVO[]}
   * @memberof AssetClassTreeVO
   */
  children: AssetClassTreeVO[];
}

export type { AssetClassTreeVO };
