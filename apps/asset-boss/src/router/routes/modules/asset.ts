import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:badge-dollar-sign',
      order: 9998,
      title: $t('asset.title'),
    },
    name: 'AssetManager',
    path: '/asset',
    children: [
      {
        name: 'AssetClass',
        path: '/asset/class',
        component: () => import('#/views/asset/class/index.vue'),
        meta: {
          icon: 'lucide:book-open-text',
          title: $t('asset.assetClass.menuName'),
        },
      },
      {
        name: 'Asset',
        path: '/asset/list',
        component: () => import('#/views/asset/index.vue'),
        meta: {
          icon: 'lucide:layout-dashboard',
          title: $t('asset.asset.menuName'),
        },
      },
    ],
  },
];

export default routes;
