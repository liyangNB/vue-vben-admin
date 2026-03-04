<script lang="ts" setup>
import type { Recordable } from '@vben/types';

import type { VbenFormSchema } from '#/adapter/form';
import type {
  AssetClassAddAO,
  AssetClassDetailsVO,
  AssetClassUpdateAO,
} from '#/api/types';

import { computed, ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';
import { getPopupContainer } from '@vben/utils';

import { useVbenForm, z } from '#/adapter/form';
import {
  apiAssetClassAdd,
  apiAssetClassPage,
  apiAssetClassUpdate,
} from '#/api/boss';
import { $t } from '#/locales';

const emit = defineEmits<{
  success: [];
}>();

const formData = ref<AssetClassDetailsVO>();

const schema: VbenFormSchema[] = [
  {
    component: 'Input',
    fieldName: 'code',
    label: $t('asset.class.code'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.class.code')]))
      .max(50, $t('ui.formRules.maxLength', [$t('asset.class.code'), 50])),
  },
  {
    component: 'Input',
    fieldName: 'name',
    label: $t('asset.class.name'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.class.name')]))
      .max(100, $t('ui.formRules.maxLength', [$t('asset.class.name'), 100])),
  },
  {
    component: 'ApiSelect',
    componentProps: {
      allowClear: true,
      api: async () => {
        const response = await apiAssetClassPage({ pageSize: 9999 });
        // Convert id to string to match parentId type
        return (response.records || []).map((item) => ({
          ...item,
          id: String(item.id),
        }));
      },
      class: 'w-full',
      filterOption(input: string, option: Recordable<any>) {
        const name: string = option.name ?? '';
        if (!name) return false;
        return name.toLowerCase().includes(input.toLowerCase());
      },
      getPopupContainer,
      labelField: 'name',
      showSearch: true,
      valueField: 'id',
    },
    fieldName: 'parentId',
    label: $t('asset.class.parentName'),
  },
  {
    component: 'Textarea',
    componentProps: {
      class: 'w-full',
      maxlength: 500,
      rows: 4,
      showCount: true,
    },
    fieldName: 'remark',
    label: $t('asset.class.remark'),
  },
];

const [Form, formApi] = useVbenForm({
  commonConfig: {
    colon: true,
  },
  schema,
  showDefaultActions: false,
});

const [Drawer, drawerApi] = useVbenDrawer({
  onConfirm: onSubmit,
  onOpenChange(isOpen) {
    if (isOpen) {
      const data = drawerApi.getData<AssetClassDetailsVO>();
      if (data) {
        formData.value = data;
        formApi.setValues(formData.value);
      } else {
        formApi.resetForm();
      }
    }
  },
});

async function onSubmit() {
  const { valid } = await formApi.validate();
  if (valid) {
    drawerApi.lock();
    try {
      if (formData.value?.id) {
        const data = await formApi.getValues<AssetClassUpdateAO>();
        await apiAssetClassUpdate({ ...data, id: formData.value.id });
      } else {
        const data = await formApi.getValues<AssetClassAddAO>();
        await apiAssetClassAdd(data);
      }
      drawerApi.close();
      emit('success');
    } finally {
      drawerApi.unlock();
    }
  }
}

const getDrawerTitle = computed(() =>
  formData.value?.id
    ? $t('ui.actionTitle.edit', [$t('asset.class.name')])
    : $t('ui.actionTitle.create', [$t('asset.class.name')]),
);
</script>

<template>
  <Drawer class="w-full max-w-[800px]" :title="getDrawerTitle">
    <Form class="mx-4" layout="vertical" />
  </Drawer>
</template>
