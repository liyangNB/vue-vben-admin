import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { ProjectPageVO } from '#/api/types';

import { $t } from '#/locales';

export function getProjectTypeOptions() {
  return [
    {
      color: 'processing',
      label: $t('project.project.typeProductDev'),
      value: 'product_dev',
    },
    {
      color: 'default',
      label: $t('project.project.typeOdm'),
      value: 'odm',
    },
    {
      color: 'warning',
      label: $t('project.project.typePreResearch'),
      value: 'pre_research',
    },
    {
      color: 'success',
      label: $t('project.project.typeTechDev'),
      value: 'tech_dev',
    },
    {
      color: 'error',
      label: $t('project.project.typeOem'),
      value: 'oem',
    },
    {
      color: 'cyan',
      label: $t('project.project.typeProductMaintenance'),
      value: 'product_maintenance',
    },
    {
      color: 'purple',
      label: $t('project.project.typeTechMaintenance'),
      value: 'tech_maintenance',
    },
  ];
}

export function useColumns(
  onActionClick: OnActionClickFn<ProjectPageVO>,
): VxeTableGridOptions<ProjectPageVO>['columns'] {
  return [
    {
      align: 'left',
      field: 'name',
      fixed: 'left',
      title: $t('project.project.name'),
    },
    {
      field: 'code',
      title: $t('project.project.code'),
    },
    {
      align: 'center',
      cellRender: { name: 'CellTag', options: getProjectTypeOptions() },
      field: 'type',
      title: $t('project.project.type'),
    },
    {
      field: 'master',
      title: $t('project.project.master'),
    },
    {
      field: 'remark',
      title: $t('project.project.remark'),
    },
    {
      align: 'right',
      cellRender: {
        attrs: {
          nameField: 'name',
          onClick: onActionClick,
        },
        name: 'CellOperation',
        options: ['edit', 'delete'],
      },
      field: 'operation',
      fixed: 'right',
      headerAlign: 'center',
      showOverflow: false,
      title: $t('common.operation'),
    },
  ];
}
