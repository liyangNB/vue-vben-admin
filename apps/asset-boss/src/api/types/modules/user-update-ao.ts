/**
 * 用户更新AO
 * @export
 * @interface UserUpdateAO
 */
interface UserUpdateAO {
  /**
   * 主键
   * @type {number}
   * @memberof UserUpdateAO
   */
  id: number;
  /**
   * 用户名
   * @type {string}
   * @memberof UserUpdateAO
   */
  username?: string;
  /**
   * 昵称
   * @type {string}
   * @memberof UserUpdateAO
   */
  nickname?: string;
  /**
   * 密码
   * @type {string}
   * @memberof UserUpdateAO
   */
  password?: string;
  /**
   * 邮件
   * @type {string}
   * @memberof UserUpdateAO
   */
  email?: string;
  /**
   * 电话
   * @type {string}
   * @memberof UserUpdateAO
   */
  phone?: string;
  /**
   * 头像http地址
   * @type {string}
   * @memberof UserUpdateAO
   */
  imgUrl?: string;
  /**
   * 用户类型[system：系统用户、org：组织用户]
   * @type {string}
   * @memberof UserUpdateAO
   */
  type?: string;
  /**
   * 三方认证ID
   * @type {string}
   * @memberof UserUpdateAO
   */
  openId?: string;
  /**
   * 锁定状态[0：未锁定、1：锁定 ]
   * @type {string}
   * @memberof UserUpdateAO
   */
  lockState?: string;
  /**
   * 锁定理由
   * @type {string}
   * @memberof UserUpdateAO
   */
  lockReason?: string;
  /**
   * 当前所在根组织ID
   * @type {number}
   * @memberof UserUpdateAO
   */
  rootOrgId?: number;
}

export type { UserUpdateAO };
