---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_ManufactureData](./pro-api.pcb_manufacturedata.md) &gt; [getManufactureData](./pro-api.pcb_manufacturedata.getmanufacturedata.md)

# PCB\_ManufactureData.getManufactureData() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

导出制造文件

## 签名

```typescript
getManufactureData(): Promise<File | undefined>;
```

## 返回值

Promise&lt;File \| undefined&gt;

制造文件

## 备注

本接口对应私有化部署版本一键导出制造文件功能

将根据前端一键导出制造文件弹窗的配置获取其文件数据

注意：本接口仅私有化部署版本有效，如若在其他版本调用将始终 `throw Error`
