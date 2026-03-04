/**
 * 用户分页VO
 * @export
 * @interface UserPageVO
 */
interface UserPageVO {
  /**
   * 主键
   * @type {number}
   * @memberof UserPageVO
   */
  id?: number;
  /**
   * 用户名
   * @type {string}
   * @memberof UserPageVO
   */
  username?: string;
  /**
   * 昵称
   * @type {string}
   * @memberof UserPageVO
   */
  nickname?: string;
  /**
   * 邮件
   * @type {string}
   * @memberof UserPageVO
   */
  email?: string;
  /**
   * 电话
   * @type {string}
   * @memberof UserPageVO
   */
  phone?: string;
  /**
   * 用户类型
   * @type {string}
   * @memberof UserPageVO
   */
  type?: string;
  /**
   * 锁定状态
   * @type {string}
   * @memberof UserPageVO
   */
  lockState?: string;
  /**
   * 最近一次登录时间
   * @type {string}
   * @memberof UserPageVO
   */
  lastLoginTime?: string;
  /**
   * 当前所在根组织ID
   * @type {number}
   * @memberof UserPageVO
   */
  rootOrgId?: number;
  /**
   * 根组织名称
   * @type {string}
   * @memberof UserPageVO
   */
  rootOrgName?: string;
}

export type { UserPageVO };
