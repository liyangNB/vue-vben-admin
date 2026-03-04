<script lang="ts" setup>
import type {
  OnActionClickParams,
  VxeTableGridOptions,
} from '#/adapter/vxe-table';
import type { ProjectPageVO } from '#/api/types';

import { Page, useVbenDrawer } from '@vben/common-ui';
import { Plus } from '@vben/icons';
import { $t } from '@vben/locales';

import { Button, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import {
  apiProjectBatchDelete,
  apiProjectDetails,
  apiProjectPage,
} from '#/api/boss';

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
        query: async ({ page }, formValues) => {
          const { records, total } = await apiProjectPage({
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

function onActionClick({ code, row }: OnActionClickParams<ProjectPageVO>) {
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

async function onEdit(row: ProjectPageVO) {
  const project = await apiProjectDetails({ id: row.id as string });
  formDrawerApi.setData(project).open();
}

function onCreate() {
  formDrawerApi.setData({}).open();
}

function onDelete(row: ProjectPageVO) {
  Modal.confirm({
    title: $t('ui.actionTitle.delete', [row.name]),
    content: $t('ui.actionMessage.deleteConfirm', [row.name]),
    okText: $t('common.confirm'),
    cancelText: $t('common.cancel'),
    okType: 'danger',
    onOk: async () => {
      const hideLoading = message.loading({
        content: $t('ui.actionMessage.deleting', [row.name]),
        duration: 0,
        key: 'action_process_msg',
      });
      try {
        await apiProjectBatchDelete({ ids: [row.id!] });
        message.success({
          content: $t('ui.actionMessage.deleteSuccess', [row.name]),
          key: 'action_process_msg',
        });
        onRefresh();
      } catch {
        hideLoading();
      }
    },
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
          {{ $t('ui.actionTitle.create', [$t('project.project.menuName')]) }}
        </Button>
      </template>
    </Grid>
  </Page>
</template>
