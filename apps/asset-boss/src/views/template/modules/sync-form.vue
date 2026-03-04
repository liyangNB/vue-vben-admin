<script lang="ts" setup>
import type { VbenFormSchema } from '#/adapter/form';
import type { TemplateSyncAO } from '#/api/types';

import { computed } from 'vue';

import { useVbenModal } from '@vben/common-ui';

import { Button } from 'ant-design-vue';

import { useVbenForm, z } from '#/adapter/form';
import { apiTemplateSync } from '#/api/boss';
import { $t } from '#/locales';

const emit = defineEmits<{
  success: [];
}>();

const getTitle = computed(() => $t('template.template.syncConfirmTitle'));

const getSchema = computed((): VbenFormSchema[] => [
  {
    component: 'RadioGroup',
    componentProps: {
      buttonStyle: 'solid',
      options: [
        {
          label: $t('template.template.syncAll'),
          value: 'all',
        },
        {
          label: $t('template.template.syncSingle'),
          value: 'single',
        },
      ],
      optionType: 'button',
    },
    defaultValue: 'all',
    fieldName: 'syncType',
    label: $t('template.template.syncMode'),
  },
  {
    component: 'Input',
    componentProps: {
      placeholder: $t('template.template.templateCodePlaceholder'),
    },
    dependencies: {
      show: (values: any) => values.syncType === 'single',
      triggerFields: ['syncType'],
    },
    fieldName: 'code',
    label: $t('template.template.templateCodeLabel'),
    rules: z.string().optional(),
  },
]);

const [Form, formApi] = useVbenForm({
  layout: 'vertical',
  schema: getSchema.value,
  showDefaultActions: false,
});

function resetForm() {
  formApi.resetForm();
  formApi.setValues({ syncType: 'all' });
}

const [Modal, modalApi] = useVbenModal({
  async onConfirm() {
    const { valid } = await formApi.validate();
    if (valid) {
      const values = await formApi.getValues();

      // Validate single template code if needed
      if (values.syncType === 'single' && !values.code?.trim()) {
        // Show validation error
        throw new Error($t('template.template.templateCodeRequired'));
      }

      modalApi.lock();
      try {
        const syncData: TemplateSyncAO =
          values.syncType === 'all' ? {} : { code: values.code?.trim() };

        await apiTemplateSync(syncData);
        modalApi.close();
        emit('success');
      } finally {
        modalApi.lock(false);
      }
    }
  },
  onOpenChange(isOpen) {
    if (isOpen) {
      resetForm();
    }
  },
});

defineExpose({
  modalApi,
});
</script>

<template>
  <Modal :title="getTitle">
    <div class="p-4">
      <div class="mb-4 text-sm text-gray-600">
        {{ $t('template.template.syncDescription') }}
      </div>
      <Form />
    </div>
    <template #prepend-footer>
      <div class="flex-auto">
        <Button @click="resetForm">
          {{ $t('common.reset') }}
        </Button>
      </div>
    </template>
  </Modal>
</template>
