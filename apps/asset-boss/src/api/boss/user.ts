import type {
  IPageOfPageVO,
  UserAddAO,
  UserDeleteAO,
  UserDetailsVO,
  UserPageAO,
  UserPageVO,
  UserPermanentDeleteAO,
  UserSyncVO,
  UserUpdateAO,
} from '../types';

import { requestClient } from '../request';

const prefixUser = '/v1/user';

const userUrl = {
  userAdd: `${prefixUser}/add`,
  userBatchDelete: `${prefixUser}/batch/delete`,
  userBatchDeletePermanent: `${prefixUser}/batch/delete/permanent`,
  userDetails: `${prefixUser}/details`,
  userPage: `${prefixUser}/page`,
  userSync: `${prefixUser}/sync`,
  userUpdate: `${prefixUser}/update`,
};

/**
 * 用户分页列表
 * @param params
 * @returns UserPageVO
 */
export async function apiUserPage(params: UserPageAO) {
  return requestClient.get<IPageOfPageVO<UserPageVO>>(userUrl.userPage, {
    params,
  });
}

/**
 * 添加用户
 * @param data
 */
export async function apiUserAdd(data: UserAddAO) {
  return requestClient.post(userUrl.userAdd, data);
}

/**
 * 批量删除用户
 * @param data
 */
export async function apiUserBatchDelete(data: UserDeleteAO) {
  return requestClient.post(userUrl.userBatchDelete, data);
}

/**
 * 批量物理删除用户
 * @param data
 */
export async function apiUserBatchDeletePermanent(data: UserPermanentDeleteAO) {
  return requestClient.post(userUrl.userBatchDeletePermanent, data);
}

/**
 * 查询用户详情
 * @param params
 * @param params.id 用户id
 * @returns UserDetailsVO
 */
export async function apiUserDetails(params: { id: string }) {
  return requestClient.get<UserDetailsVO>(userUrl.userDetails, {
    params,
  });
}

/**
 * 更新用户
 * @param data
 */
export async function apiUserUpdate(data: UserUpdateAO) {
  return requestClient.post(userUrl.userUpdate, data);
}

/**
 * 同步钉钉用户信息
 * @param params
 * @param params.dingAuthCode 钉钉授权码
 * @returns UserSyncVO
 */
export async function apiUserSync(params: { dingAuthCode: string }) {
  return requestClient.post<UserSyncVO>(userUrl.userSync, null, {
    params,
  });
}
