<script lang="ts" setup>
import type {
  OnActionClickParams,
  VxeTableGridOptions,
} from '#/adapter/vxe-table';
import type { AssetPageVO } from '#/api/types';

import { Page, useVbenDrawer } from '@vben/common-ui';
import { Plus } from '@vben/icons';
import { $t } from '@vben/locales';

import { Button, message } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import { apiAssetBatchDelete, apiAssetDetails, apiAssetPage } from '#/api/boss';

import { useColumns } from './data';
import Form from './modules/form.vue';

const [FormDrawer, formDrawerApi] = useVbenDrawer({
  connectedComponent: Form,
  destroyOnClose: true,
});

const [Grid, gridApi] = useVbenVxeGrid({
  gridOptions: {
    columns: useColumns(onActionClick),
    height: 'auto',
    keepSource: true,
    pagerConfig: {
      enabled: true,
    },
    proxyConfig: {
      ajax: {
        // query: async ({ page }, formValues) => {
        //   const { records } = await apiAssetPage({
        //     page: page.currentPage,
        //     pageSize: page.pageSize,
        //     ...formValues,
        //   });
        //   return records;
        // },
        query: async ({ page }, formValues) => {
          const { records, total } = await apiAssetPage({
            page: page.currentPage,
            pageSize: page.pageSize,
            ...formValues,
          });
          if (records && records.length > 0) {
            return {
              items: records,
              total,
            };
          }
          return {
            items: [],
            total: 0,
          };
        },
      },
    },
    rowConfig: {
      keyField: 'id',
    },
    toolbarConfig: {
      custom: true,
      export: false,
      refresh: true,
      zoom: true,
    },
  } as VxeTableGridOptions,
});

function onActionClick({ code, row }: OnActionClickParams<AssetPageVO>) {
  switch (code) {
    case 'delete': {
      onDelete(row);
      break;
    }
    case 'edit': {
      onEdit(row);
      break;
    }
    default: {
      break;
    }
  }
}

function onRefresh() {
  gridApi.query();
}

async function onEdit(row: AssetPageVO) {
  const assetDetail = await apiAssetDetails({ id: row.id as string });
  formDrawerApi
    .setData({
      ...assetDetail,
      classId: String(assetDetail.classId),
      projectId: String(assetDetail.projectId),
    })
    .open();
}

function onCreate() {
  formDrawerApi.setData({}).open();
}

function onDelete(row: AssetPageVO) {
  const hideLoading = message.loading({
    content: $t('ui.actionMessage.deleting', [row.name]),
    duration: 0,
    key: 'action_process_msg',
  });
  apiAssetBatchDelete({ ids: [row.id!] })
    .then(() => {
      message.success({
        content: $t('ui.actionMessage.deleteSuccess', [row.name]),
        key: 'action_process_msg',
      });
      onRefresh();
    })
    .catch(() => {
      hideLoading();
    });
}
</script>

<template>
  <Page auto-content-height>
    <FormDrawer @success="onRefresh" />
    <Grid>
      <template #toolbar-tools>
        <Button type="primary" @click="onCreate">
          <Plus class="size-5" />
          {{ $t('ui.actionTitle.create', [$t('asset.asset.menuName')]) }}
        </Button>
      </template>
    </Grid>
  </Page>
</template>
