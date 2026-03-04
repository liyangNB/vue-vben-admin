import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: () => import('#/views/project/index.vue'),
    meta: {
      icon: 'lucide:airplay',
      title: $t('project.project.menuName'),
    },
    name: 'VbenAbout',
    path: '/project/list',
  },
];

export default routes;
