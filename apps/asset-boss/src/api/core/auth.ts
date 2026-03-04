import type { AxiosResponse, HttpResponse } from '@vben/request';

import type { LoginAo, LoginUserInfoVo } from '../types';

import { baseRequestClient, requestClient } from '#/api/request';

export namespace AuthApi {
  /** 登录接口参数 */
  export interface LoginParams {
    password?: string;
    username?: string;
  }

  /** 登录接口返回值 */
  export interface LoginResult {
    accessToken: string;
  }

  export interface RefreshTokenResult {
    data: string;
    status: number;
  }
}

/**
 * 登录
 */
export async function apiLogin(data: LoginAo) {
  return baseRequestClient.post<AxiosResponse<HttpResponse<LoginUserInfoVo>>>(
    '/v1/account/login',
    data,
  );
}

/**
 * 退出登录
 */
export async function apiLogout() {
  return requestClient.post('/v1/account/logout', {
    withCredentials: true,
  });
}
