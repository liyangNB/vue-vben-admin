# Design Document: Cloud Boss Project Setup

## Overview

本设计文档描述了如何在现有的 Vben Admin monorepo 项目中创建一个新的 cloud-boss 应用。该应用将复用 web-antd 项目的架构模式，使用 Vite + Vue 3 + TypeScript + Ant Design Vue 技术栈，并集成所有必要的 @vben/\* workspace 包。

设计目标：

- 创建与 web-antd 结构一致的新应用
- 复用所有 workspace 共享包
- 配置独立的开发和构建环境
- 提供完整的项目脚手架，可立即开始开发

## Architecture

### 项目结构

```
apps/cloud-boss/
├── public/                    # 静态资源目录
│   └── favicon.ico
├── src/                       # 源代码目录
│   ├── adapter/              # 组件适配器
│   │   ├── component/        # 组件适配器目录
│   │   └── form.ts          # 表单适配器
│   ├── api/                  # API 接口
│   │   ├── core/            # 核心 API
│   │   ├── index.ts         # API 导出
│   │   └── request.ts       # 请求封装
│   ├── layouts/              # 布局组件
│   │   ├── auth.vue         # 认证布局
│   │   ├── basic.vue        # 基础布局
│   │   └── index.ts         # 布局导出
│   ├── locales/              # 国际化
│   │   ├── langs/           # 语言文件
│   │   └── index.ts         # 国际化配置
│   ├── router/               # 路由配置
│   │   ├── routes/          # 路由定义
│   │   ├── access.ts        # 权限控制
│   │   ├── guard.ts         # 路由守卫
│   │   └── index.ts         # 路由入口
│   ├── store/                # 状态管理
│   │   ├── auth.ts          # 认证状态
│   │   └── index.ts         # Store 入口
│   ├── views/                # 页面组件
│   │   └── _core/           # 核心页面
│   ├── app.vue              # 根组件
│   ├── bootstrap.ts         # 应用初始化
│   ├── main.ts              # 应用入口
│   └── preferences.ts       # 偏好设置
├── .env                      # 环境变量
├── .env.development          # 开发环境变量
├── .env.production           # 生产环境变量
├── .env.analyze              # 分析环境变量
├── index.html                # HTML 入口
├── package.json              # 项目配置
├── postcss.config.mjs        # PostCSS 配置
├── tailwind.config.mjs       # Tailwind 配置
├── tsconfig.json             # TypeScript 配置
├── tsconfig.node.json        # Node TypeScript 配置
└── vite.config.mts           # Vite 配置
```

### 技术栈

- **构建工具**: Vite 5.x
- **框架**: Vue 3.x (Composition API)
- **语言**: TypeScript 5.x
- **UI 组件库**: Ant Design Vue 4.x
- **路由**: Vue Router 4.x
- **状态管理**: Pinia 2.x
- **CSS 框架**: Tailwind CSS 3.x
- **包管理**: pnpm workspace

### 依赖关系

```mermaid
graph TD
    A[cloud-boss] --> B[@vben/access]
    A --> C[@vben/common-ui]
    A --> D[@vben/constants]
    A --> E[@vben/hooks]
    A --> F[@vben/icons]
    A --> G[@vben/layouts]
    A --> H[@vben/locales]
    A --> I[@vben/plugins]
    A --> J[@vben/preferences]
    A --> K[@vben/request]
    A --> L[@vben/stores]
    A --> M[@vben/styles]
    A --> N[@vben/types]
    A --> O[@vben/utils]
    A --> P[ant-design-vue]
    A --> Q[vue]
    A --> R[vue-router]
    A --> S[pinia]
```

## Components and Interfaces

### 1. 配置文件组件

#### package.json

```typescript
interface PackageJson {
  name: string; // "@vben/cloud-boss"
  version: string; // 继承自 monorepo 版本
  type: 'module'; // ES Module
  scripts: {
    dev: string; // 开发服务器
    build: string; // 生产构建
    'build:analyze': string; // 构建分析
    preview: string; // 预览构建结果
    typecheck: string; // 类型检查
  };
  imports: {
    '#/*': string; // 路径别名
  };
  dependencies: Record<string, string>; // 项目依赖
}
```

#### vite.config.mts

```typescript
interface ViteConfig {
  application: {}; // 应用配置
  vite: {
    server: {
      proxy: {
        '/api': ProxyOptions; // API 代理配置
      };
    };
  };
}

interface ProxyOptions {
  target: string; // 代理目标地址
  changeOrigin: boolean; // 改变源
  rewrite: (path: string) => string; // 路径重写
  ws: boolean; // WebSocket 支持
}
```

#### tsconfig.json

```typescript
interface TSConfig {
  extends: string; // 继承基础配置
  compilerOptions: {
    baseUrl: string; // 基础路径
    paths: Record<string, string[]>; // 路径映射
  };
  references: Array<{ path: string }>; // 项目引用
  include: string[]; // 包含的文件
}
```

### 2. 应用入口组件

#### main.ts

应用的主入口文件，负责启动应用。

```typescript
interface MainModule {
  bootstrap(): Promise<void>; // 启动应用
}
```

#### bootstrap.ts

应用初始化逻辑，包括创建 Vue 应用实例、注册插件、挂载应用。

```typescript
interface BootstrapModule {
  createApp(): Promise<App>; // 创建应用实例
  setupPlugins(app: App): void; // 注册插件
  setupRouter(app: App): void; // 配置路由
  setupStore(app: App): void; // 配置状态管理
  mount(app: App): void; // 挂载应用
}
```

#### app.vue

根组件，包含路由视图。

```typescript
interface AppComponent {
  template: string; // 组件模板
  setup(): void; // 组合式 API
}
```

### 3. 路由组件

#### router/index.ts

路由配置和实例创建。

```typescript
interface RouterModule {
  createRouter(): Router; // 创建路由实例
  setupRouterGuard(router: Router): void; // 设置路由守卫
}
```

#### router/routes/index.ts

路由定义。

```typescript
interface RouteConfig {
  path: string; // 路由路径
  name: string; // 路由名称
  component: Component; // 路由组件
  meta?: RouteMeta; // 路由元信息
  children?: RouteConfig[]; // 子路由
}
```

### 4. 状态管理组件

#### store/index.ts

Pinia store 配置。

```typescript
interface StoreModule {
  setupStore(app: App): void; // 配置 store
}
```

### 5. API 组件

#### api/request.ts

HTTP 请求封装。

```typescript
interface RequestModule {
  request<T>(config: RequestConfig): Promise<T>; // 发送请求
  get<T>(url: string, config?: RequestConfig): Promise<T>;
  post<T>(url: string, data?: any, config?: RequestConfig): Promise<T>;
  put<T>(url: string, data?: any, config?: RequestConfig): Promise<T>;
  delete<T>(url: string, config?: RequestConfig): Promise<T>;
}
```

### 6. 适配器组件

#### adapter/form.ts

表单组件适配器，将 Ant Design Vue 表单组件适配到 @vben/common-ui。

```typescript
interface FormAdapter {
  setupFormComponent(): void; // 配置表单组件
}
```

## Data Models

### 环境变量模型

```typescript
interface EnvironmentVariables {
  // 应用标题
  VITE_APP_TITLE: string;

  // 应用命名空间，用于缓存隔离
  VITE_APP_NAMESPACE: string;

  // Store 加密密钥
  VITE_APP_STORE_SECURE_KEY: string;

  // API 基础路径（可选）
  VITE_API_BASE_URL?: string;
}
```

### 应用偏好设置模型

```typescript
interface AppPreferences {
  // 主题配置
  theme: {
    mode: 'light' | 'dark' | 'auto';
    colorPrimary: string;
  };

  // 布局配置
  layout: {
    mode: 'sidebar' | 'top' | 'mix';
    collapsed: boolean;
  };

  // 国际化配置
  locale: {
    language: string;
    fallback: string;
  };
}
```

### 路由元信息模型

```typescript
interface RouteMeta {
  // 页面标题
  title?: string;

  // 图标
  icon?: string;

  // 是否需要认证
  requiresAuth?: boolean;

  // 权限代码
  permissions?: string[];

  // 是否隐藏菜单
  hideInMenu?: boolean;

  // 是否缓存
  keepAlive?: boolean;
}
```

## Correctness Properties

_属性是一个特征或行为，应该在系统的所有有效执行中保持为真——本质上是关于系统应该做什么的正式声明。属性作为人类可读规范和机器可验证正确性保证之间的桥梁。_

### Property 1: 目录结构完整性

_For any_ 成功创建的 cloud-boss 项目，所有必需的目录（apps/cloud-boss, src, src/api, src/views, src/router, src/store, src/layouts, src/locales, src/adapter, src/adapter/component, public）都应该存在。

**Validates: Requirements 1.1, 1.2, 1.3, 10.2**

### Property 2: 核心文件存在性

_For any_ 成功创建的 cloud-boss 项目，所有核心源代码文件（src/main.ts, src/app.vue, src/bootstrap.ts, src/preferences.ts, src/router/index.ts, src/store/index.ts, src/api/index.ts, src/api/request.ts, src/layouts/index.ts, src/locales/index.ts, src/adapter/form.ts）都应该存在。

**Validates: Requirements 1.4, 1.5, 1.6, 1.7, 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 9.8, 9.9, 9.10, 10.1**

### Property 3: 配置文件存在性

_For any_ 成功创建的 cloud-boss 项目，所有配置文件（package.json, vite.config.mts, tsconfig.json, tsconfig.node.json, postcss.config.mjs, tailwind.config.mjs, index.html）都应该存在。

**Validates: Requirements 2.1, 3.1, 4.1, 4.5, 6.1, 7.1, 7.3**

### Property 4: 环境变量文件完整性

_For any_ 成功创建的 cloud-boss 项目，所有环境变量文件（.env, .env.development, .env.production, .env.analyze）都应该存在。

**Validates: Requirements 5.1, 5.4, 5.5, 5.6**

### Property 5: Workspace 依赖一致性

_For any_ 成功创建的 cloud-boss 项目，其 package.json 中的所有 @vben/_ workspace 依赖应该与 web-antd 项目的 @vben/_ 依赖列表完全匹配。

**Validates: Requirements 2.2**

### Property 6: Package.json 脚本完整性

_For any_ 成功创建的 cloud-boss 项目，其 package.json 应该包含所有必需的脚本（dev, build, build:analyze, preview, typecheck），并且每个脚本的命令应该与规范匹配。

**Validates: Requirements 2.4, 2.5, 2.6, 2.7, 2.8**

### Property 7: Package.json 配置正确性

_For any_ 成功创建的 cloud-boss 项目，其 package.json 应该包含正确的 name 字段（"@vben/cloud-boss"）、imports 字段（"#/_": "./src/_"）以及所有必需的外部依赖（ant-design-vue, vue, vue-router, pinia）。

**Validates: Requirements 2.1, 2.3, 2.9**

### Property 8: TypeScript 配置正确性

_For any_ 成功创建的 cloud-boss 项目，其 tsconfig.json 应该正确继承 @vben/tsconfig/web-app.json，配置 baseUrl 为 "."，paths 映射 "#/_" 到 ["./src/_"]，include 包含 src/**/\*.ts, src/**/_.tsx, src/\*\*/_.vue，并引用 tsconfig.node.json。

**Validates: Requirements 4.1, 4.2, 4.3, 4.4, 4.6**

### Property 9: Vite 配置正确性

_For any_ 成功创建的 cloud-boss 项目，其 vite.config.mts 应该从 @vben/vite-config 导入 defineConfig，配置 /api 代理到 http://localhost:5320/api，启用 WebSocket 支持，并配置路径重写以移除 /api 前缀。

**Validates: Requirements 3.2, 3.3, 3.4, 3.5**

### Property 10: 环境变量配置正确性

_For any_ 成功创建的 cloud-boss 项目，其 .env 文件应该包含 VITE_APP_TITLE="Cloud Boss"、VITE_APP_NAMESPACE="vben-cloud-boss" 和 VITE_APP_STORE_SECURE_KEY 配置。

**Validates: Requirements 5.1, 5.2, 5.3**

### Property 11: HTML 入口文件正确性

_For any_ 成功创建的 cloud-boss 项目，其 index.html 应该包含使用 VITE_APP_TITLE 变量的标题、必需的 meta 标签（charset, viewport, description）、id="app" 的 div 元素，以及加载 /src/main.ts 的 script 标签。

**Validates: Requirements 6.2, 6.3, 6.4, 6.5**

### Property 12: PostCSS 和 Tailwind 配置正确性

_For any_ 成功创建的 cloud-boss 项目，其 postcss.config.mjs 应该配置 tailwindcss 和 autoprefixer 插件，tailwind.config.mjs 应该继承 @vben/tailwind-config。

**Validates: Requirements 7.2, 7.4**

### Property 13: 根 Package.json 脚本更新

_For any_ 成功创建的 cloud-boss 项目，根目录的 package.json 应该包含 "dev:cloud-boss" 脚本（"pnpm -F @vben/cloud-boss run dev"）和 "build:cloud-boss" 脚本（"pnpm run build --filter=@vben/cloud-boss"）。

**Validates: Requirements 8.1, 8.2**

## Error Handling

### 文件系统错误

- **目录已存在**: 如果 apps/cloud-boss 目录已存在，应该提示用户并询问是否覆盖
- **权限错误**: 如果没有写入权限，应该清晰地报告错误并提供解决建议
- **磁盘空间不足**: 如果磁盘空间不足，应该在开始创建文件之前检测并报告

### 配置错误

- **无效的 JSON**: 如果生成的 JSON 配置文件格式错误，应该在写入前验证
- **缺失的依赖**: 如果 workspace 中缺少必需的 @vben/\* 包，应该报告并提供安装指导
- **版本冲突**: 如果依赖版本与 workspace 不兼容，应该警告用户

### 验证错误

- **文件创建失败**: 如果任何必需文件创建失败，应该回滚已创建的文件并报告错误
- **配置验证失败**: 如果生成的配置文件不符合规范，应该报告具体的验证错误

## Testing Strategy

### 单元测试

项目脚手架的测试主要关注验证生成的文件和配置是否正确：

1. **文件存在性测试**: 验证所有必需的文件和目录都已创建
2. **配置内容测试**: 验证配置文件的内容是否符合规范
3. **JSON 格式测试**: 验证所有 JSON 文件格式正确且可解析
4. **依赖完整性测试**: 验证 package.json 中的依赖列表完整

### 属性测试

由于这是一个项目脚手架任务，属性测试主要用于验证生成结果的一致性：

1. **结构一致性**: 验证生成的项目结构与 web-antd 保持一致
2. **依赖一致性**: 验证 @vben/\* 依赖与 web-antd 完全匹配
3. **配置完整性**: 验证所有必需的配置项都已设置

每个属性测试应该：

- 运行至少 100 次迭代（虽然对于脚手架任务，每次结果应该相同）
- 使用标签格式：**Feature: cloud-boss-project-setup, Property {number}: {property_text}**
- 引用设计文档中的对应属性

### 集成测试

1. **项目启动测试**: 验证生成的项目可以成功运行 `pnpm dev`
2. **构建测试**: 验证生成的项目可以成功运行 `pnpm build`
3. **类型检查测试**: 验证生成的项目可以通过 TypeScript 类型检查

### 测试工具

- **文件系统测试**: 使用 Node.js fs 模块验证文件存在性
- **JSON 解析**: 使用 JSON.parse 验证 JSON 文件格式
- **配置验证**: 使用自定义验证函数检查配置内容
- **命令执行**: 使用 child_process 执行 pnpm 命令验证项目可运行性
