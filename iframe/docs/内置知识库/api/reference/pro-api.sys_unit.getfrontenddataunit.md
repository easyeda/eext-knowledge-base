---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SYS\_Unit](./pro-api.sys_unit.md) &gt; [getFrontendDataUnit](./pro-api.sys_unit.getfrontenddataunit.md)

# SYS\_Unit.getFrontendDataUnit() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取 EDA 前端数据单位跨度

## 签名

```typescript
getFrontendDataUnit(): Promise<ESYS_Unit | undefined>;
```

## 返回值

Promise&lt;[ESYS\_Unit](./pro-api.esys_unit.md) \| undefined&gt;

单位

## 备注

此处指的是前端用户可以切换的单位，需要同时兼容原理图和 PCB 画布
