import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { AssetClassPageVO } from '#/api/types';

import { $t } from '#/locales';

export function useColumns(
  onActionClick: OnActionClickFn<AssetClassPageVO>,
): VxeTableGridOptions<AssetClassPageVO>['columns'] {
  return [
    {
      align: 'left',
      field: 'name',
      fixed: 'left',
      title: $t('asset.class.name'),
      treeNode: true,
    },
    {
      field: 'code',
      title: $t('asset.class.code'),
    },
    {
      field: 'parentName',
      title: $t('asset.class.parentName'),
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
