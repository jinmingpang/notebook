# rnMetro打包原理了解

- [资源文档](https://juejin.cn/post/6881420775723630600)

## 判断是否在debug环境

- [博文](https://www.jianshu.com/p/f30658d048a6)

### android

```java
//在Android Studio项目中
if(BuildConfig.DEBUG){
  //debug模式
}else{
  //release模式
}
```

### ios

```c
#ifdef DEBUG
  // debug模式
#else
  //release 模式
#endif
```

### rn

```js
if(__DEV__){
    // debug模式
}else{
    // release模式
}
```
