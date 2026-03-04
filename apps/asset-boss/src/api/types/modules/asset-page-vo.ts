/**
 * 资产分页VO
 * @export
 * @interface AssetPageVO
 */
interface AssetPageVO {
  /**
   * 编号
   * @type {string}
   * @memberof AssetPageVO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof AssetPageVO
   */
  id?: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetPageVO
   */
  name?: string;
  /**
   * 所属人
   * @type {string}
   * @memberof AssetPageVO
   */
  owner?: string;
  /**
   * 设备状态
   * @type {string}
   * @memberof AssetPageVO
   */
  state?: string;
  /**
   * 库存总量
   * @type {number}
   * @memberof AssetPageVO
   */
  total?: number;
  /**
   * 类型
   * @type {string}
   * @memberof AssetPageVO
   */
  type?: string;
}

export type { AssetPageVO };
