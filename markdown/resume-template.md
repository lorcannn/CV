<!-- <div align="center">
  <h2>吕坤</h2>
  <p>17660847067 | lvkun454650@163.com | 杭州</p>
  <p>高级前端开发工程师</p>
</div> -->

# 专业技能

### ECMAScript & HTML5 & CSS3

- 持续关注和使用 ES6+ 新特性，如解构赋值，模板字符串，扩展运算符，空值合并运算，可选链运算
- 熟悉 **Promise，Async/await** 的异步解决方案
- 能够使用原生 JS 配合 Electron 开发桌面应用
- 能够使用原生 CSS 完成常见布局和样式，使用 Less 或 CSS-in-JS 方案经验

### React

- 熟悉 React 组件化开发的特点，能够开发高效可复用的 UI 组件
- 理解 React 组件渲染原理，掌握多种组件间通信方式
- 熟练使用 **React Hooks** 编写函数式组件及自定义 Hooks
- 可基于 Ant Design 等组件库二次封装符合业务场景的通用组件

### HTTP & Node.js & 爬虫

- 熟悉 HTTP 协议，理解协议中的常见字段含义，理解**跨域**原理
- 熟悉网络请求与响应，理解 Axios 实现原理能对其进行适合业务场景的二次封装
- 了解常用的 Node 模块，能够使用 Express 搭建后端服务
- 能够使用 sync-request 和 cheerio 实现网络请求与网页爬虫

### 前端工程化

- 对前端工程化有一定理解
- 理解 **webpack** 运行流程，有 从 0 到 1 搭建项目和构建优化的能力，可编写自定义 Loader 和 Plugin，使用合理的 source-map 方案
- 熟练使用 **Git** 进行代码及分支管理，熟悉常用 Git 命令
- 能够使用 **Chrome DevTools** 进行代码调试和性能分析，使用 **React Developer Tools** 调试 React 组件和性能分析

# 项目经历

## 业务组件库 - 负责人

关键词：**Rollup、TypeScript、Storybook、Plop、Jest、Ant Design**

**背景**：发现公司一个拥有 90+ 公共组件的「巨石项目」在多人维护过程中遇到的问题，我推动并主导了前端业务组件库的搭建落地。

**实现**：公司统一使用了 antd 作为 UI 框架，由于资源有限针对业务组件库我们无需从头开发，直接采取 styled-components + antd 二次封装的方案。组件库打包使用 Rollup，组件库文档站点我对比了 dumi，React Styleguidist 等方案，最终被 Storybook
强大功能，接入成本低，社区生态活跃的优势所吸引，组件测试使用 Jest + react-testing-library 方案，另外还接入了 Plop 一键生成新组件模板代码，eslint 代码检查，commitlint 提交检查，一键打包并生成 CHANGELOG，一键提交发布

**成果**：目前内部业务组件库已完成 50+ 组件迁移，服务于 4 个线上业务系统。

**挑战**：

- 构建体积优化
- 在开发中发现痛点到调研解决方案并推动解决落地的过程对我来说是一个比较大的挑战， 会遇到质疑是否值得投入，会遇到同事配合积极性不高的问题。不仅要做发现问题的人，还要做争取资源并推动解决问题的人。

## 客服智能管理系统

关键词：**Lerna、react-dnd、Echarts、Styled-components、TypeScript**

功能：一个拥有看板、BI、分析报表等多功能的多包架构的大型 Sass 产品。

**难点**：

1. webpack 构建优化。效果: bundle 体积大小 20M -> 3M，首屏 9s -> 1s
2. 类似低代码的拖拽生成 BI 分析页面。支持用户自定义的对散点图、雷达图、富文本等 11 种图表的数据配置、拖拽布局、全局过滤条件。

## 云端资源管家 - 前端负责人

关键词：**React、Redux、TypeScript、Webpack、Ant Design、ahooks**

作为项目前端负责人，主要负责：脚手架搭建、公共模块开发、后端接口对接、任务排期、任务分工。

使用 webpack 作为构建工具，抽取 react、react-dom 等公共依赖充分利用浏览器缓存。使用 HappyPack 等插件提升打包速度。

针对团队成员水平代码风格、开发水平不一的情况。我做了以下约定、规范尽量抹平成员差异，统一项目代码风格。

1. 利用 Sass 定义公共样式类（边框、定位、布局、字号、颜色）。效果：目前简单页面和组件完全不用写对应的样式 文件。
2. 统一目录结构及命名规范。
3. 统一接口管理。请求模块对 axios 进行了二次封装，配置拦截器统一错误处理，并将原本散落在各个页面的接口 url 进行统一管理
4. npm script 命令一键生成新页面模板代码。利用 plop 插件，配置新页面模板代码，一键生成多文件（夹），可极大的提升开发效率。

## 阿里云盘 Web 端

关键词：**Vue、Videojs、axios、Less**

作为项目成员主要负责网盘文件列表、视频播放器、图片预览功能

平台核心功能：网盘文件预览（音频，视频，图片，文档）、文件（夹）管理、文件上传下载

## LK 音乐播放器

关键字：**Electron，Bootstrap，原生 JS，electron-store，electron-builder**

基于 Electron 和原生 JS 的本地音乐播放器 使用 Bootstrap 丰富样式 使用 electron-store 进行本地的数据持久化 使用 electron-builder 进行打包 支持列表（循环，随机，顺序）播放，支持歌曲导入和删除

# 开源作品及分享

- 开源作品：[使用 Node 为我自动生成短视频](https://gitee.com/lorcannn/short-video-creator)
- 3 月内部分享：[「关于为 XX 项目接入组件文档工具的调研」](https://fnlexrdv75.feishu.cn/docx/doxcnFpdaQcBEWIz459yy93vnug?from=from_copylink)

# 工作经历

<p align="left">语忆科技 - 前端开发工程师<span style="float:right;">2021.08 - 至今</span></p>

- 前端业务组件库
- 客服智能管理系统

<p align="left">博彦科技股份有限公司 - 前端开发工程师<span style="float:right;">2019.09 - 2021.08</span></p>

- 阿里云盘 Web 端
- 云智能财务管理平台

<p align="left">参军<span style="float:right;">2015.09 - 2019.09</span></p>

- 自动化站 - 前端开发

# 教育经历

<p align="left">福建师范大学闽南科技学院 - 生物工程 本科 生命科学与化学系<span style="float:right;">2011.09 - 2015.07</span></p>

# 致谢

感谢您花时间阅读我的简历，期待能有机会和您共事。
