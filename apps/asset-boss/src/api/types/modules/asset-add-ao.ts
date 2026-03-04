/**
 * 添加资产AO
 * @export
 * @interface AssetAddAO
 */
interface AssetAddAO {
  /**
   * 位置信息
   * @type {string}
   * @memberof AssetAddAO
   */
  address?: string;
  /**
   * 分类ID
   * @type {string}
   * @memberof AssetAddAO
   */
  classId: string;
  /**
   * 编号
   * @type {string}
   * @memberof AssetAddAO
   */
  code: string;
  /**
   * 图片
   * @type {string}
   * @memberof AssetAddAO
   */
  imgUrl?: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetAddAO
   */
  name: string;
  /**
   * 所属人
   * @type {string}
   * @memberof AssetAddAO
   */
  owner?: string;
  /**
   * 项目ID
   * @type {string}
   * @memberof AssetAddAO
   */
  projectId: string;
  /**
   * 备注
   * @type {string}
   * @memberof AssetAddAO
   */
  remark?: string;
  /**
   * 设备状态[unuse：未使用、use：使用中、scrap：报废、rework：返工]
   * @type {string}
   * @memberof AssetAddAO
   */
  state: string;
  /**
   * 库存总量
   * @type {number}
   * @memberof AssetAddAO
   */
  total: number;
  /**
   * 类型[asset：资产、consumable：耗材]
   * @type {string}
   * @memberof AssetAddAO
   */
  type: string;
}

export type { AssetAddAO };
