# Implementation Plan: Cloud Boss Project Setup

## Overview

本实现计划将指导在 monorepo 中创建 cloud-boss 项目。任务按照依赖顺序组织，从基础目录结构开始，逐步添加配置文件、源代码文件，最后更新根项目配置。每个任务都引用了相应的需求，确保完整覆盖所有功能。

## Tasks

- [x] 1. 创建项目目录结构
  - 创建 apps/cloud-boss 主目录
  - 创建 src 及其所有子目录（api, api/core, views, views/\_core, router, router/routes, store, layouts, locales, locales/langs, adapter, adapter/component）
  - 创建 public 目录用于静态资源
  - _Requirements: 1.1, 1.2, 1.3, 10.2_

- [ ]\* 1.1 验证目录结构完整性
  - **Property 1: 目录结构完整性**
  - **Validates: Requirements 1.1, 1.2, 1.3, 10.2**

- [ ] 2. 创建 package.json 配置文件
  - [x] 2.1 创建 apps/cloud-boss/package.json
    - 设置 name 为 "@vben/cloud-boss"
    - 设置 version 继承 monorepo 版本（5.5.9）
    - 设置 type 为 "module"
    - 配置 imports 字段：`"#/*": "./src/*"`
    - 添加所有 @vben/\* workspace 依赖（参考 web-antd）
    - 添加外部依赖：ant-design-vue, vue, vue-router, pinia, dayjs, @vueuse/core（使用 catalog:）
    - 定义所有脚本：dev, build, build:analyze, preview, typecheck
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9_

- [ ]\* 2.2 验证 package.json 配置正确性
  - **Property 5: Workspace 依赖一致性**
  - **Property 6: Package.json 脚本完整性**
  - **Property 7: Package.json 配置正确性**
  - **Validates: Requirements 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8, 2.9**

- [ ] 3. 创建 TypeScript 配置文件
  - [x] 3.1 创建 apps/cloud-boss/tsconfig.json
    - 继承 @vben/tsconfig/web-app.json
    - 配置 baseUrl 为 "."
    - 配置 paths 映射 "#/_" 到 ["./src/_"]
    - 配置 include 包含 src/**/\*.ts, src/**/_.tsx, src/\*\*/_.vue
    - 添加 references 引用 tsconfig.node.json
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.6_

  - [x] 3.2 创建 apps/cloud-boss/tsconfig.node.json
    - 继承 @vben/tsconfig/node.json
    - 配置 composite 为 true
    - 配置 tsBuildInfoFile
    - 配置 noEmit 为 false
    - include vite.config.mts
    - _Requirements: 4.5_

- [ ]\* 3.3 验证 TypeScript 配置正确性
  - **Property 8: TypeScript 配置正确性**
  - **Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.5, 4.6**

- [ ] 4. 创建 Vite 配置文件
  - [x] 4.1 创建 apps/cloud-boss/vite.config.mts
    - 从 @vben/vite-config 导入 defineConfig
    - 配置 application 对象
    - 配置 vite.server.proxy 代理 /api 到 http://localhost:5320/api
    - 启用 changeOrigin 和 ws（WebSocket）
    - 配置 rewrite 函数移除 /api 前缀
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ]\* 4.2 验证 Vite 配置正确性
  - **Property 9: Vite 配置正确性**
  - **Validates: Requirements 3.1, 3.2, 3.3, 3.4, 3.5**

- [ ] 5. 创建环境变量文件
  - [x] 5.1 创建 apps/cloud-boss/.env
    - 设置 VITE_APP_TITLE="Cloud Boss"
    - 设置 VITE_APP_NAMESPACE="vben-cloud-boss"
    - 设置 VITE_APP_STORE_SECURE_KEY="cloud-boss-secure-key-change-me"
    - _Requirements: 5.1, 5.2, 5.3_

  - [x] 5.2 创建 apps/cloud-boss/.env.development
    - 可以留空或添加开发环境特定配置
    - _Requirements: 5.4_

  - [x] 5.3 创建 apps/cloud-boss/.env.production
    - 可以留空或添加生产环境特定配置
    - _Requirements: 5.5_

  - [x] 5.4 创建 apps/cloud-boss/.env.analyze
    - 可以留空或添加分析环境特定配置
    - _Requirements: 5.6_

- [ ]\* 5.5 验证环境变量配置正确性
  - **Property 4: 环境变量文件完整性**
  - **Property 10: 环境变量配置正确性**
  - **Validates: Requirements 5.1, 5.2, 5.3, 5.4, 5.5, 5.6**

- [ ] 6. 创建 HTML 入口文件和样式配置
  - [x] 6.1 创建 apps/cloud-boss/index.html
    - 设置 HTML 基础结构
    - 使用 <%= VITE_APP_TITLE %> 作为标题
    - 添加必需的 meta 标签（charset, viewport, description, keywords, author）
    - 创建 id="app" 的 div 元素
    - 添加 script 标签加载 /src/main.ts
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [x] 6.2 创建 apps/cloud-boss/postcss.config.mjs
    - 配置 tailwindcss 插件
    - 配置 autoprefixer 插件
    - _Requirements: 7.1, 7.2_

  - [x] 6.3 创建 apps/cloud-boss/tailwind.config.mjs
    - 从 @vben/tailwind-config 导入配置
    - 继承基础配置
    - _Requirements: 7.3, 7.4_

- [ ]\* 6.4 验证 HTML 和样式配置正确性
  - **Property 3: 配置文件存在性**（部分）
  - **Property 11: HTML 入口文件正确性**
  - **Property 12: PostCSS 和 Tailwind 配置正确性**
  - **Validates: Requirements 6.1, 6.2, 6.3, 6.4, 6.5, 7.1, 7.2, 7.3, 7.4**

- [ ] 7. 创建应用入口文件
  - [x] 7.1 创建 apps/cloud-boss/src/main.ts
    - 导入 bootstrap 函数
    - 调用 bootstrap() 启动应用
    - _Requirements: 9.1_

  - [x] 7.2 创建 apps/cloud-boss/src/bootstrap.ts
    - 导入必要的 Vue 和 @vben/\* 包
    - 创建 Vue 应用实例
    - 注册路由、状态管理、插件
    - 挂载应用到 #app
    - _Requirements: 9.2_

  - [x] 7.3 创建 apps/cloud-boss/src/app.vue
    - 创建根组件
    - 包含 <RouterView /> 用于路由渲染
    - _Requirements: 9.3_

  - [x] 7.4 创建 apps/cloud-boss/src/preferences.ts
    - 从 @vben/preferences 导入 defineOverridesPreferences
    - 定义应用偏好设置（主题、布局等）
    - _Requirements: 9.4_

- [ ] 8. 创建路由配置
  - [x] 8.1 创建 apps/cloud-boss/src/router/index.ts
    - 从 @vben/layouts 导入布局组件
    - 从 vue-router 导入 createRouter, createWebHistory
    - 导入路由定义
    - 创建并导出路由实例
    - _Requirements: 9.5_

  - [x] 8.2 创建 apps/cloud-boss/src/router/routes/index.ts
    - 定义基础路由配置
    - 包含根路由和默认重定向
    - _Requirements: 9.5_

  - [x] 8.3 创建 apps/cloud-boss/src/router/guard.ts
    - 创建路由守卫逻辑（可以先留空或添加基础守卫）
    - _Requirements: 9.5_

  - [x] 8.4 创建 apps/cloud-boss/src/router/access.ts
    - 创建权限控制逻辑（可以先留空或添加基础权限）
    - _Requirements: 9.5_

- [ ] 9. 创建状态管理
  - [x] 9.1 创建 apps/cloud-boss/src/store/index.ts
    - 从 pinia 导入必要函数
    - 导出 store 配置
    - _Requirements: 9.6_

  - [x] 9.2 创建 apps/cloud-boss/src/store/auth.ts
    - 使用 defineStore 创建认证 store
    - 定义基础的认证状态和方法
    - _Requirements: 9.6_

- [ ] 10. 创建 API 配置
  - [x] 10.1 创建 apps/cloud-boss/src/api/request.ts
    - 从 @vben/request 导入请求工具
    - 创建 HTTP 请求实例
    - 配置请求拦截器和响应拦截器
    - _Requirements: 9.8_

  - [x] 10.2 创建 apps/cloud-boss/src/api/index.ts
    - 导出 request 实例
    - 导出 API 相关工具
    - _Requirements: 9.7_

  - [x] 10.3 创建 apps/cloud-boss/src/api/core 目录
    - 创建空目录用于存放核心 API 定义
    - _Requirements: 9.7_

- [ ] 11. 创建布局组件
  - [x] 11.1 创建 apps/cloud-boss/src/layouts/index.ts
    - 从 @vben/layouts 导入布局组件
    - 重新导出布局组件
    - _Requirements: 9.9_

  - [x] 11.2 创建 apps/cloud-boss/src/layouts/basic.vue
    - 创建基础布局组件
    - 使用 @vben/layouts 提供的布局组件
    - _Requirements: 9.9_

  - [x] 11.3 创建 apps/cloud-boss/src/layouts/auth.vue
    - 创建认证页面布局组件
    - 使用 @vben/layouts 提供的认证布局
    - _Requirements: 9.9_

- [ ] 12. 创建国际化配置
  - [x] 12.1 创建 apps/cloud-boss/src/locales/index.ts
    - 从 @vben/locales 导入国际化工具
    - 配置支持的语言
    - 导出国际化实例
    - _Requirements: 9.10_

  - [x] 12.2 创建 apps/cloud-boss/src/locales/langs 目录
    - 创建空目录用于存放语言文件
    - _Requirements: 9.10_

- [ ] 13. 创建组件适配器
  - [-] 13.1 创建 apps/cloud-boss/src/adapter/form.ts
    - 从 @vben/common-ui 导入表单组件配置
    - 从 ant-design-vue 导入组件
    - 配置表单组件适配器
    - _Requirements: 10.1_

  - [ ] 13.2 创建 apps/cloud-boss/src/adapter/component 目录
    - 创建空目录用于存放其他组件适配器
    - _Requirements: 10.2_

- [ ] 14. 创建视图目录
  - [ ] 14.1 创建 apps/cloud-boss/src/views/\_core 目录
    - 创建核心页面目录
    - _Requirements: 1.2_

- [ ] 15. 创建静态资源
  - [ ] 15.1 复制 favicon.ico 到 apps/cloud-boss/public
    - 从 web-antd 复制或创建新的 favicon
    - _Requirements: 1.3_

- [ ]\* 16. 验证核心文件存在性
  - **Property 2: 核心文件存在性**
  - **Validates: Requirements 1.4, 1.5, 1.6, 1.7, 9.1-9.10, 10.1**

- [ ] 17. 更新根 package.json
  - [ ] 17.1 在根 package.json 的 scripts 中添加 cloud-boss 脚本
    - 添加 "dev:cloud-boss": "pnpm -F @vben/cloud-boss run dev"
    - 添加 "build:cloud-boss": "pnpm run build --filter=@vben/cloud-boss"
    - 保持脚本按字母顺序排列
    - _Requirements: 8.1, 8.2_

- [ ]\* 17.2 验证根 package.json 脚本更新
  - **Property 13: 根 Package.json 脚本更新**
  - **Validates: Requirements 8.1, 8.2**

- [ ] 18. Checkpoint - 验证项目可以启动
  - 运行 `pnpm install` 安装依赖
  - 运行 `pnpm dev:cloud-boss` 验证开发服务器可以启动
  - 检查是否有任何错误或警告
  - 如有问题，询问用户并进行修复

- [ ]\* 19. 运行完整的属性测试套件
  - 验证所有 13 个正确性属性
  - 确保项目结构、配置和文件内容都符合规范
  - _Validates: All Requirements_

## Notes

- 标记为 `*` 的任务是可选的测试任务，可以跳过以加快 MVP 开发
- 每个任务都引用了具体的需求编号，确保可追溯性
- Checkpoint 任务确保增量验证，及早发现问题
- 属性测试验证通用正确性属性
- 单元测试验证具体示例和边缘情况
- 所有文件内容应参考 web-antd 项目作为模板
- 配置文件应尽可能复用 @vben/\* workspace 包的功能
