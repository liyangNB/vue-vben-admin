/**
 * 资产分类详情VO
 * @export
 * @interface AssetClassDetailsVO
 */
interface AssetClassDetailsVO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetClassDetailsVO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof AssetClassDetailsVO
   */
  id?: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetClassDetailsVO
   */
  name?: string;
  /**
   * 父分类ID
   * @type {string}
   * @memberof AssetClassDetailsVO
   */
  parentId?: string;
  /**
   * 备注
   * @type {string}
   * @memberof AssetClassDetailsVO
   */
  remark?: string;
}

export type { AssetClassDetailsVO };
