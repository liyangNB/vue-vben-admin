/**
 * 钉钉用户同步响应VO
 * @export
 * @interface UserSyncVO
 */
interface UserSyncVO {
  /**
   * 用户ID
   * @type {number}
   * @memberof UserSyncVO
   */
  userId?: number;
  /**
   * 用户名
   * @type {string}
   * @memberof UserSyncVO
   */
  username?: string;
  /**
   * 昵称
   * @type {string}
   * @memberof UserSyncVO
   */
  nickname?: string;
  /**
   * 钉钉用户ID
   * @type {string}
   * @memberof UserSyncVO
   */
  dingUserId?: string;
  /**
   * openId
   * @type {string}
   * @memberof UserSyncVO
   */
  openId?: string;
  /**
   * 邮箱
   * @type {string}
   * @memberof UserSyncVO
   */
  email?: string;
  /**
   * 手机号
   * @type {string}
   * @memberof UserSyncVO
   */
  mobile?: string;
  /**
   * 头像
   * @type {string}
   * @memberof UserSyncVO
   */
  avatar?: string;
  /**
   * 工号
   * @type {string}
   * @memberof UserSyncVO
   */
  jobNumber?: string;
  /**
   * 职位
   * @type {string}
   * @memberof UserSyncVO
   */
  title?: string;
  /**
   * 部门ID列表
   * @type {number[]}
   * @memberof UserSyncVO
   */
  deptIdList?: number[];
  /**
   * 是否新增用户
   * @type {boolean}
   * @memberof UserSyncVO
   */
  isNewUser?: boolean;
}

export type { UserSyncVO };
