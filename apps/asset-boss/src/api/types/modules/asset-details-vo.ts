/**
 * 资产详情VO
 * @export
 * @interface AssetDetailsVO
 */
interface AssetDetailsVO {
  /**
   * 位置信息
   * @type {string}
   * @memberof AssetDetailsVO
   */
  address?: string;
  /**
   * 分类ID
   * @type {string}
   * @memberof AssetDetailsVO
   */
  classId?: string;
  /**
   * 编号
   * @type {string}
   * @memberof AssetDetailsVO
   */
  code?: string;
  /**
   * 主键
   * @type {string}
   * @memberof AssetDetailsVO
   */
  id?: string;
  /**
   * 图片
   * @type {string}
   * @memberof AssetDetailsVO
   */
  imgUrl?: string;
  /**
   * 名称
   * @type {string}
   * @memberof AssetDetailsVO
   */
  name?: string;
  /**
   * 所属人
   * @type {string}
   * @memberof AssetDetailsVO
   */
  owner?: string;
  /**
   * 项目ID
   * @type {string}
   * @memberof AssetDetailsVO
   */
  projectId?: string;
  /**
   * 备注
   * @type {string}
   * @memberof AssetDetailsVO
   */
  remark?: string;
  /**
   * 设备状态
   * @type {string}
   * @memberof AssetDetailsVO
   */
  state?: string;
  /**
   * 库存总量
   * @type {number}
   * @memberof AssetDetailsVO
   */
  total?: number;
  /**
   * 类型
   * @type {string}
   * @memberof AssetDetailsVO
   */
  type?: string;
}

export type { AssetDetailsVO };
