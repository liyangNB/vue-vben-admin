<script lang="ts" setup>
import type { TemplateDetailsVO } from '#/api/types';

import { computed, ref } from 'vue';

import { useVbenDrawer } from '@vben/common-ui';

import { Descriptions, Tag } from 'ant-design-vue';

import { $t } from '#/locales';

const templateData = ref<TemplateDetailsVO>();

const [Drawer, drawerApi] = useVbenDrawer({
  onOpenChange(isOpen) {
    if (isOpen) {
      const data = drawerApi.getData<TemplateDetailsVO>();
      if (data) {
        templateData.value = data;
      }
    }
  },
  title: $t('template.template.details'),
});

const formattedDingData = computed(() => {
  if (!templateData.value?.dingComponentData) return null;
  try {
    return JSON.stringify(
      JSON.parse(templateData.value.dingComponentData),
      null,
      2,
    );
  } catch {
    return templateData.value.dingComponentData;
  }
});

defineExpose({
  drawerApi,
});
</script>

<template>
  <Drawer>
    <div class="p-4">
      <Descriptions :column="1" bordered size="small">
        <Descriptions.Item :label="$t('template.template.name')">
          <Tag color="blue">{{ templateData?.name || '-' }}</Tag>
        </Descriptions.Item>

        <Descriptions.Item :label="$t('template.template.code')">
          <Tag color="green">{{ templateData?.code || '-' }}</Tag>
        </Descriptions.Item>

        <Descriptions.Item :label="$t('template.template.id')">
          {{ templateData?.id || '-' }}
        </Descriptions.Item>

        <Descriptions.Item :label="$t('template.template.url')">
          <a
            v-if="templateData?.url"
            :href="templateData.url"
            target="_blank"
            class="text-blue-600 hover:text-blue-800"
          >
            {{ templateData.url }}
          </a>
          <span v-else>-</span>
        </Descriptions.Item>

        <Descriptions.Item :label="$t('template.template.path')">
          <code v-if="templateData?.path" class="rounded bg-gray-100 px-2 py-1">
            {{ templateData.path }}
          </code>
          <span v-else>-</span>
        </Descriptions.Item>

        <Descriptions.Item :label="$t('template.template.remark')">
          <div v-if="templateData?.remark" class="whitespace-pre-wrap">
            {{ templateData.remark }}
          </div>
          <span v-else>-</span>
        </Descriptions.Item>

        <Descriptions.Item :label="$t('template.template.dingComponentData')">
          <div
            v-if="templateData?.dingComponentData"
            class="max-h-40 overflow-auto"
          >
            <pre class="rounded bg-gray-50 p-2 text-xs">{{
              formattedDingData
            }}</pre>
          </div>
          <span v-else>-</span>
        </Descriptions.Item>
      </Descriptions>
    </div>
  </Drawer>
</template>
