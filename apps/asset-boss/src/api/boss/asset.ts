import type {
  AssetAddAO,
  AssetClassAddAO,
  AssetClassDeleteAO,
  AssetClassDetailsVO,
  AssetClassPageAO,
  AssetClassPageVO,
  AssetClassPermanentDeleteAO,
  AssetClassUpdateAO,
  AssetDeleteAO,
  AssetDetailsVO,
  AssetPageAO,
  AssetPageVO,
  AssetPermanentDeleteAO,
  AssetUpdateAO,
  IPageOfPageVO,
} from '../types';

import { requestClient } from '../request';

const prefixAsset = '/v1/asset';
const prefixAssetClass = '/v1/asset/class';

const assetUrl = {
  assetAdd: `${prefixAsset}/add`,
  assetBatchDelete: `${prefixAsset}/batch/delete`,
  assetBatchDeletePermanent: `${prefixAsset}/batch/delete/permanent`,
  assetDetails: `${prefixAsset}/details`,
  assetPage: `${prefixAsset}/page`,
  assetUpdate: `${prefixAsset}/update`,
  assetClassAdd: `${prefixAssetClass}/add`,
  assetClassBatchDelete: `${prefixAssetClass}/batch/delete`,
  assetClassBatchDeletePermanent: `${prefixAssetClass}/batch/delete/permanent`,
  assetClassDetails: `${prefixAssetClass}/details`,
  assetClassPage: `${prefixAssetClass}/page`,
  assetClassUpdate: `${prefixAssetClass}/update`,
};

export namespace AssetApi {
  export type AssetVO = AssetPageVO;
}

/**
 * 资产分页列表
 * @param params
 * @returns AssetPageVO
 */
export async function apiAssetPage(params: AssetPageAO) {
  return requestClient.get<IPageOfPageVO<AssetPageVO>>(assetUrl.assetPage, {
    params,
  });
}

/**
 * 添加资产
 * @param data
 */
export async function apiAssetAdd(data: AssetAddAO) {
  return requestClient.post(assetUrl.assetAdd, data);
}

/**
 * 批量删除资产
 * @param data
 */
export async function apiAssetBatchDelete(data: AssetDeleteAO) {
  return requestClient.post(assetUrl.assetBatchDelete, data);
}

/**
 * 批量物理删除资产
 * @param data
 */
export async function apiAssetBatchDeletePermanent(
  data: AssetPermanentDeleteAO,
) {
  return requestClient.post(assetUrl.assetBatchDeletePermanent, data);
}

/**
 * 查询资产详情
 * @param params
 * @param params.id 资产id
 * @returns AssetDetailsVO
 */
export async function apiAssetDetails(params: { id: string }) {
  return requestClient.get<AssetDetailsVO>(assetUrl.assetDetails, {
    params,
  });
}

/**
 * 更新资产
 * @param data
 */
export async function apiAssetUpdate(data: AssetUpdateAO) {
  return requestClient.post(assetUrl.assetUpdate, data);
}

/**
 * 资产分类分页列表
 * @param params
 * @returns AssetClassPageVO
 */
export async function apiAssetClassPage(params: AssetClassPageAO) {
  return requestClient.get<IPageOfPageVO<AssetClassPageVO>>(
    assetUrl.assetClassPage,
    {
      params,
    },
  );
}

/**
 * 添加资产分类
 * @param data
 */
export async function apiAssetClassAdd(data: AssetClassAddAO) {
  return requestClient.post(assetUrl.assetClassAdd, data);
}

/**
 * 批量删除资产分类
 * @param data
 */
export async function apiAssetClassBatchDelete(data: AssetClassDeleteAO) {
  return requestClient.post(assetUrl.assetClassBatchDelete, data);
}

/**
 * 批量物理删除资产分类
 * @param data
 */
export async function apiAssetClassBatchDeletePermanent(
  data: AssetClassPermanentDeleteAO,
) {
  return requestClient.post(assetUrl.assetClassBatchDeletePermanent, data);
}

/**
 * 查询资产分类详情
 * @param params
 * @param params.id 资产分类id
 * @returns AssetClassDetailsVO
 */
export async function apiAssetClassDetails(params: { id: string }) {
  return requestClient.get<AssetClassDetailsVO>(assetUrl.assetClassDetails, {
    params,
  });
}

/**
 * 更新资产分类
 * @param data
 */
export async function apiAssetClassUpdate(data: AssetClassUpdateAO) {
  return requestClient.post(assetUrl.assetClassUpdate, data);
}
