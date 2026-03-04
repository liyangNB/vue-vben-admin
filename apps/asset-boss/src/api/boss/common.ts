import type { UploadFile } from 'ant-design-vue';

import { requestClient } from '../request';

interface CommonUpFileAO {
  file: UploadFile;
  /** bizCode取值范围: 资产文件[ASSET_FILE] */
  bizCode: string;
}

const prefixCommon = '/common';

const commonUrl = {
  commonUpFile: `${prefixCommon}/up/file`,
};

/**
 * 有效接入分页列表
 * @param params
 * @returns EffectiveAccessPageVO
 */
export async function apiCommonUpFile(
  params: CommonUpFileAO,
  onProgress?: (percent: number) => void,
) {
  const formData = new FormData();
  formData.append('file', params.file as any);
  formData.append('bizCode', params.bizCode);
  return requestClient.post<string>(commonUrl.commonUpFile, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    timeout: 300_000,
    onUploadProgress: (e) => {
      if (e.total) {
        const percent = (e.loaded / e.total) * 100;
        onProgress?.(percent);
      }
    },
  });
}
