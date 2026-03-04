/**
 * 资产分类更新AO
 * @export
 * @interface AssetClassUpdateAO
 */
interface AssetClassUpdateAO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetClassUpdateAO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof AssetClassUpdateAO
   */
  id: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetClassUpdateAO
   */
  name?: string;
  /**
   * 父分类ID
   * @type {string}
   * @memberof AssetClassUpdateAO
   */
  parentId?: string;
  /**
   * 备注
   * @type {string}
   * @memberof AssetClassUpdateAO
   */
  remark?: string;
}

export type { AssetClassUpdateAO };
