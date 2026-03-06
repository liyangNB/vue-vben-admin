import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { AssetPageVO } from '#/api/types';

import { $t } from '#/locales';

export function getAssetTypeOptions() {
  return [
    {
      color: 'processing',
      label: $t('asset.asset.typeAsset'),
      value: 'asset',
    },
    {
      color: 'default',
      label: $t('asset.asset.typeConsumable'),
      value: 'consumable',
    },
  ];
}

export function getAssetStateOptions() {
  return [
    {
      color: 'default',
      label: $t('asset.asset.stateUnuse'),
      value: 'unuse',
    },
    {
      color: 'processing',
      label: $t('asset.asset.stateUse'),
      value: 'use',
    },
    {
      color: 'error',
      label: $t('asset.asset.stateScrap'),
      value: 'scrap',
    },
    {
      color: 'warning',
      label: $t('asset.asset.stateRework'),
      value: 'rework',
    },
  ];
}

export function useColumns(
  onActionClick: OnActionClickFn<AssetPageVO>,
): VxeTableGridOptions<AssetPageVO>['columns'] {
  return [
    {
      align: 'left',
      field: 'name',
      fixed: 'left',
      title: $t('asset.asset.name'),
    },
    {
      field: 'code',
      title: $t('asset.asset.code'),
    },
    {
      field: 'className',
      title: $t('asset.asset.classId'),
    },
    {
      field: 'projectName',
      title: $t('asset.asset.projectId'),
    },
    {
      align: 'center',
      cellRender: { name: 'CellTag', options: getAssetTypeOptions() },
      field: 'type',
      title: $t('asset.asset.type'),
    },
    {
      align: 'center',
      field: 'model',
      title: $t('asset.asset.model'),
    },
    {
      align: 'center',
      cellRender: { name: 'CellTag', options: getAssetStateOptions() },
      field: 'state',
      title: $t('asset.asset.state'),
    },
    {
      field: 'owner',
      title: $t('asset.asset.owner'),
    },
    {
      field: 'quantity',
      title: $t('asset.asset.total'),
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
