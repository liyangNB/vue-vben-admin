import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: () => import('#/views/template/index.vue'),
    meta: {
      icon: 'lucide:file',
      title: $t('template.template.menuName'),
    },
    name: 'Template',
    path: '/template/list',
  },
];

export default routes;
