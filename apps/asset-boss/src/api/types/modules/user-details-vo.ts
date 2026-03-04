/**
 * 用户详情VO
 * @export
 * @interface UserDetailsVO
 */
interface UserDetailsVO {
  /**
   * 主键
   * @type {number}
   * @memberof UserDetailsVO
   */
  id?: number;
  /**
   * 用户名
   * @type {string}
   * @memberof UserDetailsVO
   */
  username?: string;
  /**
   * 昵称
   * @type {string}
   * @memberof UserDetailsVO
   */
  nickname?: string;
  /**
   * 邮件
   * @type {string}
   * @memberof UserDetailsVO
   */
  email?: string;
  /**
   * 电话
   * @type {string}
   * @memberof UserDetailsVO
   */
  phone?: string;
  /**
   * 头像http地址
   * @type {string}
   * @memberof UserDetailsVO
   */
  imgUrl?: string;
  /**
   * 用户类型
   * @type {string}
   * @memberof UserDetailsVO
   */
  type?: string;
  /**
   * 三方认证ID
   * @type {string}
   * @memberof UserDetailsVO
   */
  openId?: string;
  /**
   * 锁定状态
   * @type {string}
   * @memberof UserDetailsVO
   */
  lockState?: string;
  /**
   * 锁定理由
   * @type {string}
   * @memberof UserDetailsVO
   */
  lockReason?: string;
  /**
   * 最近一次登录时间
   * @type {string}
   * @memberof UserDetailsVO
   */
  lastLoginTime?: string;
  /**
   * 根组织ID
   * @type {number}
   * @memberof UserDetailsVO
   */
  rootOrgId?: number;
  /**
   * 根组织名称
   * @type {string}
   * @memberof UserDetailsVO
   */
  rootOrgName?: string;
  /**
   * 根组织钉钉ID
   * @type {string}
   * @memberof UserDetailsVO
   */
  rootOrgDingdingId?: string;
  /**
   * 根组织是否根组织[yes：是、no：否]
   * @type {string}
   * @memberof UserDetailsVO
   */
  rootOrgIsRoot?: string;
  /**
   * 根组织父组织ID
   * @type {number}
   * @memberof UserDetailsVO
   */
  rootOrgParentId?: number;
  /**
   * 根组织备注
   * @type {string}
   * @memberof UserDetailsVO
   */
  rootOrgRemark?: string;
}

export type { UserDetailsVO };
