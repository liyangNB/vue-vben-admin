import type {
  IPageOfPageVO,
  ProjectAddAO,
  ProjectDeleteAO,
  ProjectDetailsVO,
  ProjectPageAO,
  ProjectPageVO,
  ProjectPermanentDeleteAO,
  ProjectUpdateAO,
} from '../types';

import { requestClient } from '../request';

const prefixProject = '/v1/project';

const projectUrl = {
  projectAdd: `${prefixProject}/add`,
  projectBatchDelete: `${prefixProject}/batch/delete`,
  projectBatchDeletePermanent: `${prefixProject}/batch/delete/permanent`,
  projectDetails: `${prefixProject}/details`,
  projectPage: `${prefixProject}/page`,
  projectUpdate: `${prefixProject}/update`,
};

/**
 * 项目分页列表
 * @param params
 * @returns ProjectPageVO
 */
export async function apiProjectPage(params: ProjectPageAO) {
  return requestClient.get<IPageOfPageVO<ProjectPageVO>>(
    projectUrl.projectPage,
    {
      params,
    },
  );
}

/**
 * 添加项目
 * @param data
 */
export async function apiProjectAdd(data: ProjectAddAO) {
  return requestClient.post(projectUrl.projectAdd, data);
}

/**
 * 批量删除项目
 * @param data
 */
export async function apiProjectBatchDelete(data: ProjectDeleteAO) {
  return requestClient.post(projectUrl.projectBatchDelete, data);
}

/**
 * 批量物理删除项目
 * @param data
 */
export async function apiProjectBatchDeletePermanent(
  data: ProjectPermanentDeleteAO,
) {
  return requestClient.post(projectUrl.projectBatchDeletePermanent, data);
}

/**
 * 查询项目详情
 * @param params
 * @param params.id 项目id
 * @returns ProjectDetailsVO
 */
export async function apiProjectDetails(params: { id: string }) {
  return requestClient.get<ProjectDetailsVO>(projectUrl.projectDetails, {
    params,
  });
}

/**
 * 更新项目
 * @param data
 */
export async function apiProjectUpdate(data: ProjectUpdateAO) {
  return requestClient.post(projectUrl.projectUpdate, data);
}
