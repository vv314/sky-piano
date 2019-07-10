# marauder-template

marauder 工程模板，适用于单页与多页项目。

为了保证多人开发时依赖安装的一致性，推荐使用 [yarn](https://yarnpkg.com/zh-Hans/) 作为包管理工具

## 命令

### 安装依赖

```bash
yarn
```

### 启动开发环境

运行开发命令将本地启动一个开发服务器，默认基础端口为 `3022`。当为多页应用时，需指定页面文件夹名称。

```bash
npm run dev [view_name]
```

示例：

```bash
# 在 index 页面下开发
npm run dev index
```

### 打包项目

执行 `build` 命令打包页面，当为多页应用时，需指定页面文件夹名称。

```bash
npm run build [view_name]
```

#### FTP 上传

_注意，要使用 ftp 上传功能，需在 `marauder.config.js` 中配置好 ftp 服务器信息。_

在 `build` 命令基础上，可通过添加 `--ftp` 参数上传打包结果。此外，为方便多分支测试，还可通过可选的 `branch` 参数来指定线上分支路径。

```bash
npm run build [view_name] --ftp [branch]
```

示例：

```bash
#  打包 index 页面，并上传至测试地址
npm run build index --ftp

#  打包 index 页面，并通过上传至测试地址下的 feed_feature 文件夹中
npm run build index --ftp feed_feature
```

### 打包 dll 文件

_注意，需在 `marauder.config.js` 中配置 `vendor` 信息。_

运行 `dll` 命令生成公共资源包，执行结果将会输出到 `dist/vendor` 文件夹下

```bash
npm run dll

# 打包 dll 文件，并上传至服务器
npm run dll --ftp
```

## 开发目录结构

```
src
├── css 静态资源
│   ├── index.css
│   └── list.css
├── img 静态资源
│   ├── add_icon.jpg
│   └── align_Hcenter.png
├── js  静态资源
└── views  多页面开发目录
    ├── index  index页面
    │   ├── index.html     index页面首页
    │   └── index.js      index页面入口js
    └── list   list页面
        ├── index.html     list页面首页
```

### 约定

- 页面名称由 views 下的文件夹名称决定，单页应用请保留一个文件夹
- 入口页面必须命名为 index.html 且置为页面根目录
- 入口 js 必须命名为 index.js 且置为页面根目录

## 配置文件

项目根目录下的 `marauder.config.js` 为脚手架配置文件

```javascript
{
  // 控制 js,css Md5，默认 false
  hash: false,
  // 控制资源 MD5，默认 true
  assetsHash: false,
  // 控制 chunkJs MD5，默认 false
  chunkHash: true,

  // 出于性能考虑，babel 编译将忽略 node_modules 目录
  // 对于 es6 模块，通过 esm 配置，通知 babel 添加额外支持
  esm: [],
  // dll(静态 vendor 包) 文件内容
  vendor: [],
  // 生成 js 与 css source map
  sourceMap: false,
  // 编译配置
  compiler: {
    // 引用 vue runtime，仅允许 vue 文件内的模板，默认启用
    vueRuntimeOnly: true,
    // 移除 console
    dropConsole: false
  },

  // hybrid 上线配置
  // 应用此选项，将在打包时生成 zip 包和 version 文件
  hybrid: {},

  // 静态资源 CDN 路径
  publicPath: './',
  // 控制是否生成 zip 文件
  zip: true,
  // ftp 服务器配置
  ftp: {
    host: '',
    port: 0,
    user: '',
    password: '',
    // 上传成功后是否自动打开浏览器
    openBrowser: true,
    // 远程路径配置
    remotePath: {
      // 路径中是否包含版本号
      version: true
    }
  }
}
```
