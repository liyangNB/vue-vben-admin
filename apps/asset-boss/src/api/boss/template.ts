import type {
  IPageOfPageVO,
  TemplateAddAO,
  TemplateDeleteAO,
  TemplateDetailsVO,
  TemplatePageAO,
  TemplatePageVO,
  TemplatePermanentDeleteAO,
  TemplateSyncAO,
  TemplateUpdateAO,
} from '../types';

import { requestClient } from '../request';

const prefixtemplate = '/v1/oa/apply/template';

const templateUrl = {
  templateAdd: `${prefixtemplate}/add`,
  templateBatchDelete: `${prefixtemplate}/batch/delete`,
  templateBatchDeletePermanent: `${prefixtemplate}/batch/delete/permanent`,
  templateDetails: `${prefixtemplate}/details`,
  templatePage: `${prefixtemplate}/page`,
  templateSync: `${prefixtemplate}/sync`,
  templateUpdate: `${prefixtemplate}/update`,
};

/**
 * 模版分页列表
 * @param params - 查询参数
 * @returns TemplatePageVO
 */
export async function apiTemplatePage(params: TemplatePageAO) {
  return requestClient.get<IPageOfPageVO<TemplatePageVO>>(
    templateUrl.templatePage,
    {
      params,
    },
  );
}

/**
 * 添加模版
 * @param data - 添加参数
 */
export async function apiTemplateAdd(data: TemplateAddAO) {
  return requestClient.post(templateUrl.templateAdd, data);
}

/**
 * 批量删除模版
 * @param data - 删除参数
 */
export async function apiTemplateBatchDelete(data: TemplateDeleteAO) {
  return requestClient.post(templateUrl.templateBatchDelete, data);
}

/**
 * 批量物理删除模版
 * @param data - 删除参数
 */
export async function apiTemplateBatchDeletePermanent(
  data: TemplatePermanentDeleteAO,
) {
  return requestClient.post(templateUrl.templateBatchDeletePermanent, data);
}

/**
 * 查询模版详情
 * @param params - 查询参数
 * @param params.id - 模版ID
 * @returns TemplateDetailsVO
 */
export async function apiTemplateDetails(params: { id: string }) {
  return requestClient.get<TemplateDetailsVO>(templateUrl.templateDetails, {
    params,
  });
}

/**
 * 同步模版
 * @param data - 同步参数
 */
export async function apiTemplateSync(data: TemplateSyncAO) {
  return requestClient.post(templateUrl.templateSync, data, {
    timeout: 60 * 1000,
  });
}

/**
 * 更新模版
 * @param data - 更新参数
 */
export async function apiTemplateUpdate(data: TemplateUpdateAO) {
  return requestClient.post(templateUrl.templateUpdate, data);
}
