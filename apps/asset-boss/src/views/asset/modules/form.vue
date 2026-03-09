<script lang="ts" setup>
import type { Recordable } from '@vben/types';

import type { VbenFormSchema } from '#/adapter/form';
import type { AssetAddAO, AssetDetailsVO, AssetUpdateAO } from '#/api/types';

import { computed, ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';
import { getPopupContainer } from '@vben/utils';

import { useVbenForm, z } from '#/adapter/form';
import {
  apiAssetAdd,
  apiAssetClassTree,
  apiAssetUpdate,
  apiCommonUpFile,
  apiProjectPage,
} from '#/api/boss';
import { $t } from '#/locales';

import { getAssetStateOptions, getAssetTypeOptions } from '../data';

const emit = defineEmits<{
  success: [];
}>();

const formData = ref<AssetDetailsVO>();

const schema: VbenFormSchema[] = [
  {
    component: 'Input',
    fieldName: 'code',
    label: $t('asset.asset.code'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.asset.code')]))
      .max(50, $t('ui.formRules.maxLength', [$t('asset.asset.code'), 50])),
  },
  {
    component: 'Input',
    fieldName: 'name',
    label: $t('asset.asset.name'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.asset.name')]))
      .max(100, $t('ui.formRules.maxLength', [$t('asset.asset.name'), 100])),
  },
  {
    component: 'Input',
    fieldName: 'model',
    label: $t('asset.asset.model'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.asset.model')])),
  },
  {
    component: 'RadioGroup',
    componentProps: {
      buttonStyle: 'solid',
      options: getAssetTypeOptions(),
      optionType: 'button',
    },
    defaultValue: 'asset',
    fieldName: 'type',
    label: $t('asset.asset.type'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.asset.type')])),
  },
  {
    component: 'RadioGroup',
    componentProps: {
      buttonStyle: 'solid',
      options: getAssetStateOptions(),
      optionType: 'button',
    },
    defaultValue: 'unuse',
    fieldName: 'state',
    label: $t('asset.asset.state'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.asset.state')])),
  },
  {
    component: 'ApiTreeSelect',
    componentProps: {
      class: 'w-full',
      allowClear: true,
      api: async () => {
        const response = await apiAssetClassTree();
        return response;
      },
      childrenField: 'children',
      getPopupContainer,
      immediate: true,
      labelField: 'name',
      showSearch: true,
      treeDefaultExpandAll: true,
      valueField: 'id',
    },
    fieldName: 'classId',
    label: $t('asset.asset.classId'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.asset.classId')])),
  },
  {
    component: 'ApiSelect',
    componentProps: {
      allowClear: true,
      api: async () => {
        const response = await apiProjectPage({ pageSize: 9999 });
        // Convert id to string to match projectId type
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
      immediate: true,
      labelField: 'name',
      showSearch: true,
      valueField: 'id',
    },
    fieldName: 'projectId',
    label: $t('asset.asset.projectId'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('asset.asset.projectId')])),
  },
  {
    component: 'InputNumber',
    componentProps: {
      class: 'w-full',
      min: 0,
    },
    defaultValue: 1,
    fieldName: 'quantity',
    label: $t('asset.asset.total'),
    rules: z
      .number()
      .min(0, $t('ui.formRules.required', [$t('asset.asset.total')])),
  },
  {
    component: 'Input',
    fieldName: 'owner',
    label: $t('asset.asset.owner'),
    rules: z
      .string()
      .max(100, $t('ui.formRules.maxLength', [$t('asset.asset.owner'), 100]))
      .optional(),
  },
  {
    component: 'Input',
    fieldName: 'address',
    label: $t('asset.asset.address'),
    rules: z
      .string()
      .max(200, $t('ui.formRules.maxLength', [$t('asset.asset.address'), 200]))
      .optional(),
  },
  {
    component: 'Upload',
    componentProps: {
      accept: 'image/*',
      api: async (file: File) => {
        const response = await apiCommonUpFile({
          file: file as any,
          bizCode: 'DEVICE_UPGRADE_PACKAGE',
        });
        return response;
      },
      listType: 'picture-card',
      maxCount: 1,
      maxSize: 5,
    },
    fieldName: 'imgUrl',
    label: $t('asset.asset.imgUrl'),
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
    label: $t('asset.asset.remark'),
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
  async onOpenChange(isOpen) {
    if (isOpen) {
      const data = drawerApi.getData<AssetDetailsVO>();
      if (data) {
        formData.value = data;

        // Wait longer for ApiSelect components to load their data
        await new Promise((resolve) => setTimeout(resolve, 500));

        // Set form values after API data is loaded
        formApi.setValues(formData.value);

        // Force update the form to ensure values are applied
        await formApi.validate();
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
        const data = await formApi.getValues<AssetUpdateAO>();
        await apiAssetUpdate({ ...data, id: formData.value.id });
      } else {
        const data = await formApi.getValues<AssetAddAO>();
        await apiAssetAdd(data);
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
    ? $t('ui.actionTitle.edit', [$t('asset.asset.menuName')])
    : $t('ui.actionTitle.create', [$t('asset.asset.menuName')]),
);
</script>

<template>
  <Drawer class="w-full max-w-[800px]" :title="getDrawerTitle">
    <Form class="mx-4" layout="vertical" />
  </Drawer>
</template>
