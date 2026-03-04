/**
 * 添加用户AO
 * @export
 * @interface UserAddAO
 */
interface UserAddAO {
  /**
   * 昵称
   * @type {string}
   * @memberof UserAddAO
   */
  nickname: string;
  /**
   * 密码
   * @type {string}
   * @memberof UserAddAO
   */
  password: string;
  /**
   * 用户类型[system：系统用户、org：组织用户]
   * @type {string}
   * @memberof UserAddAO
   */
  type: string;
  /**
   * 用户名
   * @type {string}
   * @memberof UserAddAO
   */
  username: string;
  /**
   * 邮件
   * @type {string}
   * @memberof UserAddAO
   */
  email?: string;
  /**
   * 头像http地址
   * @type {string}
   * @memberof UserAddAO
   */
  imgUrl?: string;
  /**
   * 三方认证ID
   * @type {string}
   * @memberof UserAddAO
   */
  openId?: string;
  /**
   * 电话
   * @type {string}
   * @memberof UserAddAO
   */
  phone?: string;
}

export type { UserAddAO };
