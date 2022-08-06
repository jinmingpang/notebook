# 证书体系

- [appleDev](https://developer.apple.com/)
- [博文](https://juejin.cn/post/7063065083408023565)

## Certificates 证书

- 为Mac电脑提供开发能力，
- 具有的证书MAC机器：可以
  - 真机调试
  - 打包
  - 上架APP到 App store。

### 证书环境

#### 开发(Development)

- 直接用Xcode调试debug就属于开发环境
- 模拟器上debug是不需要Certificates的
- 真机上调试运行就需要Certificates开发证书

#### 生产(Distribution)环境

- 上架app store，打包生成ipa包等都属于生产环境
- 只要是通过Archive生成都都是属于生产环境。

### 证书类型

- Software和Services都是和Mac绑定，不能直接copy给其他Mac使用
- Certificates可以导出.p12给其他Mac电脑用的，导出的.p12同样具有测试打包和发布的能力
  - 多人协同开发，第二台电脑不需要申请一套，用他人Mac电脑上Certificates导出的.p12文件安装上即可

#### Software 软件

- 开发和发布能力，一台Mac只需要建立一套即可
- 对电脑有效
  - 根据Mac的CSR请求证书创建的，所以数量限制的（超过数量就不能再创建了，除非删除已有的证书）
- 有了Software证书，开发多个app而不需要再重新申请

#### Services 服务

- Apple提供的额外服务，
  - 最常见的就是消息推送服务
- 对不同的App建立不同的Services Certificates，毕竟每个app需要的Services不同
- Services的证书是需要另外创建的，而且没有数量限制

### 证书流程

#### Development 开发证书流程

- MAC机器上：通过Mac钥匙串管理工具生成CSR请求文件，用于申请Certificates，与Certificates绑定
  - 会生成：x.certSigningRequest 文件，可以重命名便于识别
- developer网站上：申请开发 Apple Development 证书
  - 选择刚刚生成的 x.certSigningRequest 文件
  - 完成创建后
    - 下载该文件 development.cer，可以重命名便于识别
- 双击按钮 x.cer文件。打开 "钥匙串管理工具" -> "我的证书"

#### Distribution 发布证书流程

- developer网站上：申请开发 iOS Distribution (App Store and Ad Hoc) 证书
  - 选择 x.certSigningRequest 文件
  - 完成创建后
    - 下载该文件 distribution.cer，可以重命名便于识别

#### Push 推送证书申请

## APP ID

iOS每个APP都有自己唯一的身份证（Identifiers）。app的身份证就在这里申请，也就是app的唯一标识。

### Bundle ID

- 可以理解为app的身份证号码
  - 所有app都是唯一的
  - 避免重复和辨识
  - 采用反域名的格式+app名称
- 申请第三方服务，微信登陆、友盟推送、google服务等等都需要使用到Bundle ID与你的app绑定
- 采用Explicit（明确的）Bundle ID标识，不会采用Wildcard（通配符）来定义Bundle ID

### 创建流程

## Profile

描述文件Profiles将team、Identifiers、Certificates、Devices等信息联系起来

- 不同的环境需建立不同的描述文件Profiles
- 描述文件是这对app绑定的，所以每个APP都会建立相应的一套描述文件
- 描述文件可copy给其他Mac使用，但是对于的Mac需要安装相应的Certificates导出的.p12文件

- Profile两种环境
  - 开发(Development)环境
  - 发布(Distribution)环境

### 创建Profile

- 开发环境
  - 开发环境和Ad Hoc需要选择需要测试的Devices设备，选中的Devices才具有测试和安装能力

- 发布环境
  - 选择APPID
- 下载，重命名。描述文件不需要安装

## Devices 设备流程

 Devices设备列表是针对开发者账号，将udid加入到Devices列表后，这些设备具有debug测试和ad hoc安装能力。

- 需要测试的iPhone，iPad都需要加入到这个列表里面。
  -只需要添加一次
- uuid，app的每个设备都有唯一的uuid，

### 获取uuid方式
