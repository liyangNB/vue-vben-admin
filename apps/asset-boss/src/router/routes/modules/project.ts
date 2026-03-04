import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: () => import('#/views/project/index.vue'),
    meta: {
      icon: 'lucide:copyright',
      title: $t('project.project.menuName'),
    },
    name: 'VbenAbout',
    path: '/vben-admin/about',
  },
];

export default routes;
