## 参考视频和文章
[尚硅谷 TypeScript 教程](https://www.bilibili.com/video/BV1Xy4y1v7S2)

[typescript史上最强学习入门文章(2w字)](https://juejin.cn/post/7018805943710253086)


## TypeScript 是什么
1. TypeScript 是 JavaScript 的一个超集，支持 ECMAScript 6 标准，TypeScript 由微软开发的自由和开源的编程语言。
2. TypeScript 设计目标是开发大型应用，它可以编译成纯 JavaScript，编译出来的 JavaScript 可以运行在任何浏览器上。
3. TypeScript 不能被 JS 解析器直接执行

## TypeScript 环境搭建
1. 安装 TypeScript
```shell
npm install -g typescript
```

2. 安装 ts-node，直接运行 ts 文件
```shell
npm install -g ts-node
```

3. 创建 ts 配置文件 tsconfig.json
```shell
tsc --init
```

## TypeScript 配置文件
1. tsconfig.json 配置文件
```json
{
  "include": [
    "src/**/*"
  ],
  "exclude": [
  ],
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "outDir": "./dist",
    "rootDir": "./src",
    "strict": true,
    "esModuleInterop": true
  }
}
```
## Typescript 配置文件中的编译选项
1. target: 编译后的代码的目标版本
2. module: 编译后的代码使用的模块化标准
3. outDir: 编译后的代码输出的目录
4. rootDir: 编译前的代码目录
5. strict: 开启所有严格的类型检查选项
6. esModuleInterop: 允许编译器将默认导入作为命名空间导入
7. allowSyntheticDefaultImports: 允许从没有设置默认导出的模块中默认导入
8. sourceMap: 生成对应的 .map 文件
9. noImplicitAny: 不允许隐式的 any 类型
10. strictNullChecks: 开启严格的 null 检查
11. strictFunctionTypes: 开启严格函数类型检查
12. strictPropertyInitialization: 开启严格属性
13. noImplicitThis: 不允许 this 有隐式的 any 类型
14. alwaysStrict: 以严格模式检查每个模块，并在每个文件里加入 'use strict'
15. noUnusedLocals: 不允许有未使用的局部变量
16. noUnusedParameters: 不允许有未使用的参数
17. noImplicitReturns: 不允许函数有不明确的返回类型
18. noFallthroughCasesInSwitch: 不允许 switch 语句的 case 语句贯穿
19. baseUrl: 用于解析非相对模块名的基目录
20. paths: 模块名到基于 baseUrl 的路径映射的列表
21. allowJs: 允许编译 js 文件
22. checkJs: 允许在 js 文件中报告错误
23. jsx: 指定 jsx 代码的生成
24. declaration: 生成相应的 .d.ts 文件
25. noEmit: 不生成输出文件
26. noEmitOnError: 在报告错误时不生成输出文件
27. lib: 编译过程中需要引入的库文件的列表
28. typeRoots: 包含类型声明的文件的列表
29. types: 需要包含的类型声明文件名的列表
30. removeComments: 删除编译后的 .js 文件中的注释
31. downlevelIteration: 降级遍历器实现为 for..in
32. noImplicitOverride: 不允许重写方法

省略剩余的配置
