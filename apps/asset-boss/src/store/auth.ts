import type { UserInfo } from '@vben/types';

import type { LoginAo } from '#/api/types';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

import { LOGIN_PATH } from '@vben/constants';
import { preferences } from '@vben/preferences';
import { resetAllStores, useAccessStore, useUserStore } from '@vben/stores';

import { notification } from 'ant-design-vue';
import { defineStore } from 'pinia';

import { apiLogin } from '#/api';
import { $t } from '#/locales';

export const useAuthStore = defineStore('auth', () => {
  const accessStore = useAccessStore();
  const userStore = useUserStore();
  const router = useRouter();

  const loginLoading = ref(false);

  /**
   * 异步处理登录操作
   * Asynchronously handle the login process
   * @param params 登录表单数据
   */
  async function authLogin(
    params: LoginAo,
    onSuccess?: () => Promise<void> | void,
  ) {
    // 异步处理用户登录操作并获取 accessToken
    let userInfo: null | UserInfo = null;
    try {
      loginLoading.value = true;

      // 调用登录 API
      const response = await apiLogin(params);
      const loginUserInfo = response.data.data;

      // 如果成功获取到 token
      if (loginUserInfo?.token) {
        accessStore.setAccessToken(loginUserInfo.token);

        // 构建用户信息
        userInfo = {
          userId: loginUserInfo.id,
          username: loginUserInfo.username,
          realName: loginUserInfo.nickname,
          avatar: loginUserInfo.imgUrl || '',
          desc: '',
          homePath: '/dashboard',
          roles: ['admin'],
          token: loginUserInfo.token,
        };

        userStore.setUserInfo(userInfo);
        // accessStore.setAccessCodes(accessCodes);

        if (accessStore.loginExpired) {
          accessStore.setLoginExpired(false);
        } else {
          onSuccess
            ? await onSuccess?.()
            : await router.push(
                userInfo.homePath || preferences.app.defaultHomePath,
              );
        }

        if (userInfo.realName) {
          notification.success({
            description: `${$t('authentication.loginSuccessDesc')}:${userInfo.realName}`,
            duration: 3,
            message: $t('authentication.loginSuccess'),
          });
        }
      }
    } finally {
      loginLoading.value = false;
    }

    return {
      userInfo,
    };
  }

  /**
   * 登出操作
   * Logout operation
   * @param redirect 是否重定向到登录页
   */
  async function logout(redirect: boolean = true) {
    try {
      // TODO: 实现实际的登出 API 调用
      // await logoutApi();
    } catch {
      // 不做任何处理
    }
    resetAllStores();
    accessStore.setLoginExpired(false);

    // 回登录页带上当前路由地址
    await router.replace({
      path: LOGIN_PATH,
      query: redirect
        ? {
            redirect: encodeURIComponent(router.currentRoute.value.fullPath),
          }
        : {},
    });
  }

  /**
   * 获取用户信息
   * Fetch user information
   */
  async function fetchUserInfo() {
    let userInfo: null | UserInfo = null;
    // TODO: 实现实际的 API 调用
    // userInfo = await getUserInfoApi();

    // 临时返回模拟数据
    userInfo = {
      userId: '1',
      username: 'admin',
      realName: 'Admin User',
      avatar: '',
      desc: '',
      homePath: '/dashboard',
      roles: ['admin'],
      token: 'mock-token',
    };

    userStore.setUserInfo(userInfo);
    return userInfo;
  }

  /**
   * 重置 store 状态
   * Reset store state
   */
  function $reset() {
    loginLoading.value = false;
  }

  return {
    $reset,
    authLogin,
    fetchUserInfo,
    loginLoading,
    logout,
  };
});
