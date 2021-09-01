# ctfile.TencentCloud
使用腾讯云Serverless解析城通网盘直连地址

## 使用方法
直接部署到腾讯云Serverless  
记得修改password变量为你的[默认自定义密码](https://home.ctfile.com/#item-settings/action-passcode)  
##### 提供了一个琴梨梨自建的服务[service-2rsoi72f-1253144261.sh.apigw.tencentcs.com](https://service-2rsoi72f-1253144261.sh.apigw.tencentcs.com)

## 接口使用
参数：file（分享链接`/f/`之后的部分，如`8067059-498942848-21cb26`)|pass（自定义密码，可选）  
该接口将生成一个302跳转到直连地址  
示例：`https://ctdirect.qinlili.bid/directlink?file=8067059-498942848-21cb26&pass=547873715`  

## 暂未实现的功能/TODO
支持更多参数读取  

#### 需要用户友好的网页界面？[看看这个网页版](https://github.com/qinlili23333/ctfileGet/)  
#### 需要自定义非备案域名？试试[Cloudflare版](https://github.com/qinlili23333/ctfile.Workers/)  

