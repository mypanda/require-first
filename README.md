# require-first

### 使用

* `npm install` 安装依赖包
* `npm start` 启动本地server，*注意:占用端口:8080，避免被占用*


### 说明
* 这是RequireJS的使用,配置，定义模块，加载模块
* 使用的是下载的 `jquery` `underscore` ... 的js文件，没有使用NodeJS的方式加载，下次应该会用NodeJS的方式加载
* 没有使用`r.js`优化，可以参考其他信息

### RequireJS

配置文件
* baseUrl 库文件基础路径
* paths 库文件名，不需要写.js后缀
* shim 定义非 AMD 规范的模块规则，各个库也有配置属性 `exports:'$'`是下面需要用到的简写 `deps:['jquery','underscore']`是依赖库

使用RequireJS
* `require(['jquery'],function($){ //todo })`最先依赖向最前写

定义module
* define(['underscore'],function(_){ return { add:function(){ reutrn 'ok' } } })

参考了一下

* https://www.zfanw.com/blog/require-js.html
