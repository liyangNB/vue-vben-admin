/**
 * 资产更新AO
 * @export
 * @interface AssetUpdateAO
 */
interface AssetUpdateAO {
  /**
   * 位置信息
   * @type {string}
   * @memberof AssetUpdateAO
   */
  address?: string;
  /**
   * 分类ID
   * @type {number}
   * @memberof AssetUpdateAO
   */
  classId?: number;
  /**
   * 编号
   * @type {string}
   * @memberof AssetUpdateAO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof AssetUpdateAO
   */
  id: string;
  /**
   * 图片
   * @type {string}
   * @memberof AssetUpdateAO
   */
  imgUrl?: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetUpdateAO
   */
  name?: string;
  /**
   * 所属人
   * @type {string}
   * @memberof AssetUpdateAO
   */
  owner?: string;
  /**
   * 项目ID
   * @type {number}
   * @memberof AssetUpdateAO
   */
  projectId?: number;
  /**
   * 备注
   * @type {string}
   * @memberof AssetUpdateAO
   */
  remark?: string;
  /**
   * 设备状态[unuse：未使用、use：使用中、scrap：报废、rework：返工]
   * @type {string}
   * @memberof AssetUpdateAO
   */
  state?: string;
  /**
   * 库存总量
   * @type {number}
   * @memberof AssetUpdateAO
   */
  total?: number;
  /**
   * 类型[asset：资产、consumable：耗材]
   * @type {string}
   * @memberof AssetUpdateAO
   */
  type?: string;
}

export type { AssetUpdateAO };
