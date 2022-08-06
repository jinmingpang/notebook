### TS 介绍

- ##### 什么是 TS？
  - [官网](http://www.typescriptlang.org/docs/handbook/triple-slash-directives.html)
  - 完全兼容 JS，是 JS 的超集，具有类型校验的 JS 与编译器。
  - TS 本质上不是一门新语言，只是一个编译和类型检查工具，本质上代码运行的依旧是 JS。
- ##### 我们为什么要用 TS？
  - [github 相关项目](github.com/search?o=desc&q=typescript&s=stars&type=Repositories)
  - [Should You Learn TypeScript](https://snipcart.com/blog/learn-typescript-why-use-ts)
  - 大型项目静态类型检查，可以避免很多由于疏忽引起的代码错误
  - TS 是一门不断更新的语言规范，很多新特性持续加入其中
  - 强大的社区生态圈都在发展，更多的工具，更好的调试体验
  - 代码设计规范性更加突出，附带的解释性类型定义
  - 熟悉 TS 后，更容易理解其他强语言，`Flutter`，`kotlin`,`go`,`java`等
- ##### TS 有哪些缺点？
  - 第三方库的类型定义质量参差不齐，很有可能需要自己重写定义。
  - 很多库都要额的添加`@types/xx`依赖包，如果与当前使用`npm`包版本不一致，可能会引起类型错误
  - 代码开发中花一部分时间，去处理类型问题，有时为了类型不出错，可能花很长时间，最终使用`any`，避免类型校验。失去了类型检查的意义
  - 必须使用相应的工具与额外的配置，增加了项目复杂度
- ##### 个人感受
  - TS 是有必要的，无论是团队协作，还是拥抱社区，或者是代码重构等等，TS 都会提供大大的便利。项目初期虽然由复杂度，但是熟悉之后，可能完全依赖代码提示，即可开发。新成员加入，也会快速理解项目，不必完全依赖全局搜索。

### TS 内容

- #### 类型定义

  - **基本类型**

    - `Boolean` true,false
      ```
      const a: boolean = true
      ```
    - `Number` 1,1.2,0xf00d,0b1010,0o74
      ```
      const a: number = 11
      ```
    - `String` 'xxx',`yyy${x}`,"asd"
      ```
      const a: string = 'xxxx'
      ```
    - `Array` [1,2,3] 具有相同类型元素的数组
      ```
      const a: string[] = ['xxxx'] // 推荐使用
      const a: Array<string> = ['xxxx']
      const a: Array<number | string> = [1,'1','2']
      ```
    - `Tuple` [1,'3'] 限制元素位置与类型且指定个数的数组
      ```
      const a: [number, string] = [1, 'xxxx'] // 指定了位置，且具体位置上的类型
      ```
    - `Any` 任何值，可用它避免类型检查
      ```
      const a: any = null // 此处不校验类型
      ```
    - `Void` 空值，一般用在函数定义中
      ```
      function a(): void {} // 表示当前函数无返回值
      ```
    - `Null Undefined` 与 JS 相同

      ```
      const a: string | unll = null // 用作默认值
      const a: string | nudefined // 用作声明等
      ```

    - `Object` js 字面量对象类型.
      ```
      const a: object = {a: 1}
      ```
    - `Function` 函数类型
      ```
      const a: Function = () => {} // 一般不这么用
      function a(): void {} // 这样声明函数
      ```
    - `Never` 没有值，及没有任何值与该值对应,用作抛出错误或者异常等。（比较抽象）

      ```
      function error(message: string): never {
          throw new Error(message);
      }

      // Inferred return type is never
      function fail() {
          return error("Something failed");
      }

      // Function returning never must have unreachable end point
      function infiniteLoop(): never {
          while (true) {
          }
      }

      ```

  - **[ES6](http://es6.ruanyifeng.com/#docs/set-map)新类型**
    - `Set`
    - `Map`
    - `WeakSet`
    - `WeakMap`
    - `Symbol`
    - `Proxy`
    - `Reflect`
    - `Promise` !!这个用的最多
  - **高级类型**

    - `Type` 类型别名
      - 类型别名会给一个类型起个新名字。
      - 类型别名有时和接口很像
        起别名不会新建一个类型, 它创建了一个新 名字来引用那个类型。 给原始类型起别名通常没什么用.
      - 类型别名也可以是泛型
      - 类型别名不能出现在声明右侧的任何地方

    ```
        type A = { // 对象类型
            a: string
            b: number
        }

        type A = 'dev' | 'prod' // 联合类型

        type A = string | number // 已有类型取别名

        type A = B & C // 交叉类型，取交际
    ```

    - `Enum` 枚举

    ```
    enum A {
        B,
        C
    }

    const a: A = A.B // 使用 枚举值
    const b = A[a] // “B” 取枚举索引
    ```

    - `Generics` 范型, 动态类型，使用时定义类型

    ```
    function add<T>(a: T, b: T): T {
        return a + b
    }

    add('a', 'b')
    add(1, 2)
    ```

    - `Interface` 接口

    ```
    interface A {
        a: string
        b: number
    }
    // 实现类
    class AA implements A {
        a = '1'
        b = 2
    }
    // 被其他接口继承
    interface AB extends A {
        c: boolean
    }
    ```

    - `this` 类型

    - `class` 类型，与其他类 C 语言，ES6 一致
    - 类型推断
      - `typeof` 判断简单类型与 JS 一致
      - `instanceof` 判断类实例与 JS 一致
      - 强制类型转换 `as`,`<T>t`
      ```
      const a: any = 1
      const b = <string[]>a // 强制转换成数组
      const c = a as string[]
      // 因此b,c具有.length方法
      b.length
      ```
    - 类型运算
      - 交叉类型 `T & K` 取类型交集
      - 联合类型 `T | K` 取类型并集
    - 索引类型 `keyof`

    ```
    function omit<T extends object, K extends keyof T>(
      source: T,
      keys: K[]
    ): Pick<T, Exclude<keyof T, K>>
    ```

    - 映射类型 `in`

    ```
    type A = 'a' | 'b'
    type B = { // 限制B的 key只能为 'a'或者'b''
        [key in A]?: string
    }

    enum A {
        B = 'b',
        C = 'c'
    }
    type B = { // 限制B的 key只能为 'b'或者'c'
        [key in A]?: string
    }
    ```

- `Moudle`模块定义与解析
- `Namespace`命名空间与声明合并
- `///` 三斜线指令
  - `/// <reference path="..." />` 引入具体的类型文件`xxx.d.ts`
  - `/// <reference types="..." />` 指定需要的引入类型文件的位置
  - `/// <reference lib="..." />` 指定当前文件需要的类型库文件
- `.d.ts`类型定义文件
  - 纯类型声明文件，不能含有代码逻辑
  - 一般是为非 TS 项目使用的类型定义文件
  - 全局类型声明
  - 在该文件中，不能使用`import`导入.ts 文件中的类型
- ##### TS 的实际使用
  - 使用中的[基本原则](http://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html)
  - [深入理解 TS](https://jkchao.github.io/typescript-book-chinese/)
  - 必须要区分`类型（校验用）`与`值（JS实体）`
  - 如何限制一个对象的`key`值？
  - 为什么需要使用枚举值？`type联合类型`与 `enum` 类型的如何选择？
    - 枚举可以增加代码简洁度，与代码可读性
    - 需要同时使用`key`与`value`时
    - 某个值累增，且关注`key`时
    - 当`key`与`value`值相等时，使用`type联合类型`
  - 如何声明全局变量，方法，对象等？
    - 在`.d.ts`文件中，`declare`声明，并将该文件引入`tsconfig.compilerOptions.typeRoots中`
  - 类型别名`type`与`interface`区别，该什么场景使用？
    - 区别
      - 接口创建了一个新的名字，可以在其它任何地方使用。 类型别名并不创建新名字
      - 类型别名不能被 `extends和` `implements`
    - 使用基本原则
      - 尽量使用别名，如果该类型必须被继承或者实现，就改成接口。
      - 如果你无法通过接口来描述一个类型并且需要使用联合类型或元组类型，这时通常会使用类型别名

### 应用 TS

    - 使用TS我们需要知道的
        - TS是一个不断在更新的JS预编译语言，因此要注意版本问题。
        - 编译ts的`tsconfig`的核心配置项
            - `target`、`module`、`typeRoots`,`paths`
        - 使用`tsc`node命令行编译`ts`
        - 使用`babel`编译TS`@bable/preset-typescript`
        - 使用`webpack`集成TS作为开发语言`ts-loader`
        - 使用`tslint`校验格式，规范代码风格
        - 使用`vscode`开发与调试
    - 在不同场景中使用TS
        - 使用`TS+React`开发`web`应用
        - 使用`TS+node`开发`api`
        - 使用`TS+taro`开发小程序
