/**
 * 资产分类分页VO
 * @export
 * @interface AssetClassPageVO
 */
interface AssetClassPageVO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetClassPageVO
   */
  code?: string;
  /**
   * 主键
   * @type {number}
   * @memberof AssetClassPageVO
   */
  id?: number;
  /**
   * 名称
   * @type {string}
   * @memberof AssetClassPageVO
   */
  name?: string;
  /**
   * 父分类ID
   * @type {string}
   * @memberof AssetClassPageVO
   */
  parentId?: string;
  /**
   * 父分类名称
   * @type {string}
   * @memberof AssetClassPageVO
   */
  parentName?: string;
}

export type { AssetClassPageVO };
