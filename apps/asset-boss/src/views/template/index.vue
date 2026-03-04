<script lang="ts" setup>
import type {
  OnActionClickParams,
  VxeTableGridOptions,
} from '#/adapter/vxe-table';
import type { TemplatePageVO } from '#/api/types';

import { ref } from 'vue';

import { Page } from '@vben/common-ui';
import { RotateCw } from '@vben/icons';
import { $t } from '@vben/locales';

import { Button, message, Modal } from 'ant-design-vue';

import { useVbenVxeGrid } from '#/adapter/vxe-table';
import {
  apiTemplateBatchDelete,
  apiTemplateDetails,
  apiTemplatePage,
} from '#/api/boss';

import { useColumns } from './data';
import Detail from './modules/detail.vue';
import SyncForm from './modules/sync-form.vue';

const detailRef = ref<InstanceType<typeof Detail>>();
const syncFormRef = ref<InstanceType<typeof SyncForm>>();

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
          const { records, total } = await apiTemplatePage({
            pageNum: page.currentPage,
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

function onActionClick({ code, row }: OnActionClickParams<TemplatePageVO>) {
  switch (code) {
    case 'delete': {
      onDelete(row);
      break;
    }
    case 'detail': {
      onDetail(row);
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

async function onDetail(row: TemplatePageVO) {
  const template = await apiTemplateDetails({ id: row.id!.toString() });
  detailRef.value?.drawerApi.setData(template).open();
}

function onSync() {
  syncFormRef.value?.modalApi.open();
}

function onSyncSuccess() {
  message.success($t('template.template.syncSuccess'));
  onRefresh();
}

function onDelete(row: TemplatePageVO) {
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
        await apiTemplateBatchDelete({ ids: [row.id!] });
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
    <Detail ref="detailRef" />
    <SyncForm ref="syncFormRef" @success="onSyncSuccess" />
    <Grid>
      <template #toolbar-tools>
        <Button type="primary" @click="onSync">
          <RotateCw class="size-5" />
          {{ $t('template.template.syncFromDingTalk') }}
        </Button>
      </template>
    </Grid>
  </Page>
</template>
