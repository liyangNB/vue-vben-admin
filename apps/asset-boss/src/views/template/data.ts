import type { OnActionClickFn, VxeTableGridOptions } from '#/adapter/vxe-table';
import type { TemplatePageVO } from '#/api/types';

import { $t } from '#/locales';

export function useColumns(
  onActionClick: OnActionClickFn<TemplatePageVO>,
): VxeTableGridOptions<TemplatePageVO>['columns'] {
  return [
    {
      align: 'left',
      field: 'name',
      fixed: 'left',
      title: $t('template.template.name'),
    },
    {
      field: 'code',
      title: $t('template.template.code'),
    },
    {
      field: 'url',
      title: $t('template.template.url'),
    },
    {
      field: 'path',
      title: $t('template.template.path'),
    },
    {
      align: 'right',
      cellRender: {
        attrs: {
          nameField: 'name',
          onClick: onActionClick,
        },
        name: 'CellOperation',
        options: ['detail', 'delete'],
      },
      field: 'operation',
      fixed: 'right',
      headerAlign: 'center',
      showOverflow: false,
      title: $t('common.operation'),
      visible: false,
    },
  ];
}
