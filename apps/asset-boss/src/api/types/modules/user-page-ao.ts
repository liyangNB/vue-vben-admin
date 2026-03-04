/**
 * 查询用户分页列表AO
 * @export
 * @interface UserPageAO
 */
interface UserPageAO {
  /**
   * 当前页数
   * @type {number}
   * @memberof UserPageAO
   */
  pageNum?: number;
  /**
   * 页大小
   * @type {number}
   * @memberof UserPageAO
   */
  pageSize?: number;
  /**
   * 用户名
   * @type {string}
   * @memberof UserPageAO
   */
  username?: string;
  /**
   * 用户类型
   * @type {string}
   * @memberof UserPageAO
   */
  type?: string;
  /**
   * 昵称
   * @type {string}
   * @memberof UserPageAO
   */
  nickname?: string;
  /**
   * 电话
   * @type {string}
   * @memberof UserPageAO
   */
  phone?: string;
  /**
   * 邮件
   * @type {string}
   * @memberof UserPageAO
   */
  email?: string;
  /**
   * 锁定状态[0：未锁定、1：锁定 ]
   * @type {string}
   * @memberof UserPageAO
   */
  lockState?: string;
  /**
   * 当前所在根组织ID
   * @type {number}
   * @memberof UserPageAO
   */
  rootOrgId?: number;
}

export type { UserPageAO };
