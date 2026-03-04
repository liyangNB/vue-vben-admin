/**
 * 添加资产分类AO
 * @export
 * @interface AssetClassAddAO
 */
interface AssetClassAddAO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetClassAddAO
   */
  code: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetClassAddAO
   */
  name: string;
  /**
   * 父分类ID
   * @type {string}
   * @memberof AssetClassAddAO
   */
  parentId?: string;
  /**
   * 备注
   * @type {string}
   * @memberof AssetClassAddAO
   */
  remark?: string;
}

export type { AssetClassAddAO };
