# compile-node-sass

## 说明

compile-node-sass，编译sass/scss为css。

- uni-app项目，会自动编译使用sass的文件。
- 单独编译sass文件。选中sass文件，点击右键菜单 -> 外部命令 -> sass -> 编译scss/sass。

## compile-node-sass package.json文件配置项说明

compile-node-sass的配置文件为package.json。
点击菜单工具 -> 插件配置 -> compile-node-sass -> package.json，即可打开package.json文件。

> 更改配置文件后，需要重启，才能生效

### key

打开package.json, 修改key值，即可配置快捷键；可通过此快捷键直接运行此外部命令。
比如："key": "ctrl + alt + C"
  
### onDidSaveExecution
  
onDidSaveExecution: 配置保存的时候是否触发执行; 默认为false; true: 代表执行