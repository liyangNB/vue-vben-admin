# Requirements Document

## Introduction

本文档定义了在 monorepo 项目中创建新的 cloud-boss 应用的需求。cloud-boss 是一个基于 Vite + Vue 3 + TypeScript + Ant Design Vue 的前端应用，将复用现有的 @vben/\* workspace 包，并遵循与 web-antd 相同的项目结构和配置模式。

## Glossary

- **Monorepo**: 单一代码仓库管理多个项目的开发模式
- **Workspace**: pnpm workspace 工作空间，用于管理 monorepo 中的包依赖关系
- **Cloud_Boss_App**: 新创建的前端应用项目，位于 apps/cloud-boss 目录
- **Web_Antd_App**: 现有的参考项目，位于 apps/web-antd 目录
- **Vben_Packages**: workspace 中的共享包，包括 @vben/access、@vben/common-ui 等
- **Project_Structure**: 项目的目录和文件组织结构
- **Configuration_Files**: 项目配置文件，包括 package.json、vite.config.mts、tsconfig.json 等
- **Root_Package**: 根目录的 package.json 文件，包含 workspace 级别的脚本

## Requirements

### Requirement 1: 创建项目目录结构

**User Story:** 作为开发者，我希望创建完整的项目目录结构，以便组织代码和资源文件。

#### Acceptance Criteria

1. THE System SHALL create the apps/cloud-boss directory
2. THE System SHALL create the src directory with subdirectories: api, views, router, store, layouts, locales, adapter
3. THE System SHALL create the public directory for static assets
4. THE System SHALL create src/main.ts as the application entry point
5. THE System SHALL create src/app.vue as the root component
6. THE System SHALL create src/bootstrap.ts for application initialization
7. THE System SHALL create src/preferences.ts for application preferences configuration

### Requirement 2: 配置 package.json

**User Story:** 作为开发者，我希望配置 package.json 文件，以便定义项目依赖和脚本。

#### Acceptance Criteria

1. THE System SHALL create package.json with name "@vben/cloud-boss"
2. THE System SHALL include all @vben/\* workspace dependencies matching Web_Antd_App
3. THE System SHALL include ant-design-vue, vue, vue-router, pinia dependencies from catalog
4. THE System SHALL define dev script as "pnpm vite --mode development"
5. THE System SHALL define build script as "pnpm vite build --mode production"
6. THE System SHALL define build:analyze script as "pnpm vite build --mode analyze"
7. THE System SHALL define preview script as "vite preview"
8. THE System SHALL define typecheck script as "vue-tsc --noEmit --skipLibCheck"
9. THE System SHALL configure imports field with "#/_": "./src/_" path mapping

### Requirement 3: 配置 Vite 构建工具

**User Story:** 作为开发者，我希望配置 Vite 构建工具，以便进行开发和生产构建。

#### Acceptance Criteria

1. THE System SHALL create vite.config.mts file
2. THE System SHALL import defineConfig from @vben/vite-config
3. THE System SHALL configure proxy for /api path to http://localhost:5320/api
4. THE System SHALL enable WebSocket support in proxy configuration
5. THE System SHALL configure path rewriting to remove /api prefix

### Requirement 4: 配置 TypeScript

**User Story:** 作为开发者，我希望配置 TypeScript，以便获得类型检查和智能提示。

#### Acceptance Criteria

1. THE System SHALL create tsconfig.json extending @vben/tsconfig/web-app.json
2. THE System SHALL configure baseUrl as "."
3. THE System SHALL configure paths mapping "#/_" to ["./src/_"]
4. THE System SHALL include src/**/\*.ts, src/**/_.tsx, src/\*\*/_.vue files
5. THE System SHALL create tsconfig.node.json for Node.js configuration files
6. THE System SHALL reference tsconfig.node.json in tsconfig.json

### Requirement 5: 配置环境变量

**User Story:** 作为开发者，我希望配置环境变量，以便在不同环境下使用不同的配置。

#### Acceptance Criteria

1. THE System SHALL create .env file with VITE_APP_TITLE set to "Cloud Boss"
2. THE System SHALL set VITE_APP_NAMESPACE to "vben-cloud-boss"
3. THE System SHALL set VITE_APP_STORE_SECURE_KEY with a placeholder value
4. THE System SHALL create .env.development file for development environment
5. THE System SHALL create .env.production file for production environment
6. THE System SHALL create .env.analyze file for bundle analysis

### Requirement 6: 创建 HTML 入口文件

**User Story:** 作为开发者，我希望创建 HTML 入口文件，以便浏览器加载应用。

#### Acceptance Criteria

1. THE System SHALL create index.html in project root
2. THE System SHALL set page title using VITE_APP_TITLE variable
3. THE System SHALL include meta tags for charset, viewport, and description
4. THE System SHALL create div element with id="app"
5. THE System SHALL include script tag loading /src/main.ts

### Requirement 7: 配置 PostCSS 和 Tailwind CSS

**User Story:** 作为开发者，我希望配置 PostCSS 和 Tailwind CSS，以便使用现代 CSS 工具链。

#### Acceptance Criteria

1. THE System SHALL create postcss.config.mjs file
2. THE System SHALL configure tailwindcss and autoprefixer plugins
3. THE System SHALL create tailwind.config.mjs file
4. THE System SHALL extend @vben/tailwind-config in Tailwind configuration

### Requirement 8: 更新根 package.json 脚本

**User Story:** 作为开发者，我希望在根 package.json 中添加 cloud-boss 的脚本，以便从根目录启动和构建项目。

#### Acceptance Criteria

1. THE System SHALL add "dev:cloud-boss" script as "pnpm -F @vben/cloud-boss run dev"
2. THE System SHALL add "build:cloud-boss" script as "pnpm run build --filter=@vben/cloud-boss"
3. THE System SHALL maintain alphabetical ordering of scripts where applicable

### Requirement 9: 创建基础源代码文件

**User Story:** 作为开发者，我希望创建基础的源代码文件，以便应用能够正常启动。

#### Acceptance Criteria

1. THE System SHALL create src/main.ts importing bootstrap function
2. THE System SHALL create src/bootstrap.ts with application initialization logic
3. THE System SHALL create src/app.vue as the root Vue component
4. THE System SHALL create src/preferences.ts with default preferences configuration
5. THE System SHALL create src/router/index.ts with basic router configuration
6. THE System SHALL create src/store/index.ts for Pinia store setup
7. THE System SHALL create src/api/index.ts for API configuration
8. THE System SHALL create src/api/request.ts for HTTP request wrapper
9. THE System SHALL create src/layouts/index.ts exporting layout components
10. THE System SHALL create src/locales/index.ts for internationalization setup

### Requirement 10: 创建适配器文件

**User Story:** 作为开发者，我希望创建 Ant Design Vue 组件适配器，以便与 @vben/\* 包集成。

#### Acceptance Criteria

1. THE System SHALL create src/adapter/form.ts for form component adaptation
2. THE System SHALL create src/adapter/component directory for component adapters
3. THE System SHALL configure adapters to work with Ant Design Vue components
