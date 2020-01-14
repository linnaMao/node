-Web后台服务器（黑盒子）
  +java
  +PHP
  +Python
  +Ruby
  +.Net
  +node.js

-构建与Chrome的V8引擎之上
  +代码只是特定的字符串，引擎可以去解析和执行代码
  +Google Chrome的V8是目前公认的解析执行js最快的
  +node.js作者将V8引擎一直出来，开发一个独立的js运行时环境

-node.js是什么
  +不是一门语言，不是库和框架
  +是一个js运行时的环境，node.js可以解析和执行js代码
  +js可以脱离浏览器执行

-node.js中的js
  +node.js中的js没有BOM和DOM
  +EcmaScript
  +在node这个执行js的环境中为js提供一些服务器级别的API
    -文档读写
    -网络服务的构建
    -网络通信
    -http服务器
  +核心模块
    -node为js提供了很多服务级的API，这些API绝大多数都被包装到了一个具名的核心模块中了。例如文件操作的fs核心模块，http服务构建的http模块。
    当该模块是一个核心模块，则需要使用如下引用：
    const fs = require('fs')

-浏览器中的js
  +ECMAScript
  +BOM
  +DOM

-node.js特性
  +事件驱动
  +非阻塞IO模型（异步）
  +高效与轻量
  
-node.js能做什么
  +web服务器后台
  +命令行工具
    -npm
    -git（C语言开发）
    -hexo
-Web服务器开发
  +ip地址用来定位计算机
  +端口号用来定位具体的应用程序
  +一切联网通信的软件都会占用一个端口号
  +端口号的范围是0~65536
  +在计算机中有一些默认的端口号
    -例如服务器的80
  
    

