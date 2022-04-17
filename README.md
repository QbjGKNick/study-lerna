## 1. 初始化 lerna 项目

```js
lerna init
lerna notice cli v4.0.0
lerna info Initializing Git repository 初始化 git 仓库
lerna info Creating package.json 创建
lerna info Creating lerna.json 创建
lerna info Creating packages directory 创建 packages 目录
lerna success Initialized Lerna files
```

## 2. 调试源码

- 一边调试源码，一边实现

```js
lerna 最核心的入口命令
@lerna/cli 解析命令行参数的工具
@lerna/init 初始化命令
@lerna/add 添加包的命令

@lerna/bootstrap
@lerna/changed
@lerna/clean
@lerna/create
@lerna/diff
@lerna/exec
@lerna/import
@lerna/info
@lerna/init
@lerna/link
@lerna/list
@lerna/publish
@lerna/run
@lerna/version
@lerna/child-process
@lerna/cli
@lerna/command
@lerna/conventional-commits
@lerna/filter-options
@lerna/global-options

@lerna/otplease
@lerna/package-graph
@lerna/package
@lerna/project
@lerna/prompt
@lerna/validation-error
@lerna/check-working-tree
@lerna/collect-uncommitted
@lerna/collect-updates
@lerna/create-symlink
@lerna/describe-ref
@lerna/filter-packages
@lerna/get-npm-exec-opts
@lerna/get-packed
@lerna/github-client
@lerna/gitlab-client
@lerna/has-npm-version
@lerna/listable
@lerna/log-packed
@lerna/map-to-registry
@lerna/npm-conf
@lerna/npm-dist-tag
@lerna/npm-install
@lerna/npm-publish
@lerna/npm-run-script
@lerna/output
@lerna/pack-directory
@lerna/prerelease-id-from-version
@lerna/profiler
@lerna/pulse-till-done
@lerna/query-graph
@lerna/resolve-symlink
@lerna/rimraf-dir
@lerna/run-lifecycle
@lerna/run-topologically
@lerna/symlink-binary
@lerna/symlink-dependencies
@lerna/timer
@lerna/write-log-file
```

### 创建包

```js
lerna create lerna4 --registry http://localhost:4873
lerna create lerna4 --registroy http://localhost:4873
```