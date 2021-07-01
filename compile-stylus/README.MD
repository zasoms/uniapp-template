# compile-stylus

## 简介

编译stylus为css。

- uni-app项目，会自动编译使用stylus的文件。
- 单独编译stylus文件。选中styl文件，点击右键菜单 -> 外部命令 -> stylus -> 编译styl。

## compile-stylus package.json文件配置说明

compile-stylus的配置文件为package.json。
点击菜单工具 -> 插件配置 -> compile-stylus -> package.json，即可打开package.json文件。

> 更改配置文件后，需要重启，才能生效

### 配置文件：key快捷键

打开package.json, 修改key值，即可配置快捷键；可通过此快捷键直接运行此外部命令。
比如："key": "ctrl + alt + C"
  
### 配置文件：onDidSaveExecution
  
onDidSaveExecution: 配置保存的时候是否触发执行; 默认为false; true: 代表执行