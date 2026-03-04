<script lang="ts" setup>
import type { VbenFormSchema } from '#/adapter/form';
import type {
  ProjectAddAO,
  ProjectDetailsVO,
  ProjectUpdateAO,
} from '#/api/types';

import { computed, ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { useVbenForm, z } from '#/adapter/form';
import { apiProjectAdd, apiProjectUpdate } from '#/api/boss';
import { $t } from '#/locales';

import { getProjectTypeOptions } from '../data';

const emit = defineEmits<{
  success: [];
}>();

const formData = ref<ProjectDetailsVO>();

const schema: VbenFormSchema[] = [
  {
    component: 'Input',
    fieldName: 'code',
    label: $t('project.project.code'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('project.project.code')]))
      .max(50, $t('ui.formRules.maxLength', [$t('project.project.code'), 50])),
  },
  {
    component: 'Input',
    fieldName: 'name',
    label: $t('project.project.name'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('project.project.name')]))
      .max(
        100,
        $t('ui.formRules.maxLength', [$t('project.project.name'), 100]),
      ),
  },
  {
    component: 'RadioGroup',
    componentProps: {
      buttonStyle: 'solid',
      options: getProjectTypeOptions(),
      optionType: 'button',
    },
    defaultValue: 'product_dev',
    fieldName: 'type',
    label: $t('project.project.type'),
    rules: z
      .string()
      .min(1, $t('ui.formRules.required', [$t('project.project.type')])),
  },
  {
    component: 'Input',
    fieldName: 'master',
    label: $t('project.project.master'),
    rules: z
      .string()
      .max(
        100,
        $t('ui.formRules.maxLength', [$t('project.project.master'), 100]),
      )
      .optional(),
  },
  {
    component: 'Textarea',
    componentProps: {
      maxlength: 500,
      rows: 4,
      showCount: true,
    },
    fieldName: 'remark',
    label: $t('project.project.remark'),
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
      const data = drawerApi.getData<ProjectDetailsVO>();
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
        const data = await formApi.getValues<ProjectUpdateAO>();
        await apiProjectUpdate({ ...data, id: formData.value.id });
      } else {
        const data = await formApi.getValues<ProjectAddAO>();
        await apiProjectAdd(data);
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
    ? $t('ui.actionTitle.edit', [$t('project.project.menuName')])
    : $t('ui.actionTitle.create', [$t('project.project.menuName')]),
);
</script>

<template>
  <Drawer class="w-full max-w-[800px]" :title="getDrawerTitle">
    <Form class="mx-4" layout="vertical" />
  </Drawer>
</template>
