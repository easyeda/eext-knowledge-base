---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_Project](./pro-api.dmt_project.md) &gt; [getCurrentProjectInfo](./pro-api.dmt_project.getcurrentprojectinfo.md)

# DMT\_Project.getCurrentProjectInfo() method

获取当前工程的详细属性

## 签名

```typescript
getCurrentProjectInfo(): Promise<IDMT_ProjectItem | undefined>;
```

## 返回值

Promise&lt;[IDMT\_ProjectItem](./pro-api.idmt_projectitem.md) \| undefined&gt;

工程属性，如若为 `undefined` 则获取失败

## 备注

将会获取当前打开且拥有最后输入焦点的原理图、PCB、面板所关联的工程的详细属性
