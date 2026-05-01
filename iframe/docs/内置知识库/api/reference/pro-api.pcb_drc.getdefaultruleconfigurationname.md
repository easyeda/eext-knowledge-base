---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getDefaultRuleConfigurationName](./pro-api.pcb_drc.getdefaultruleconfigurationname.md)

# PCB\_Drc.getDefaultRuleConfigurationName() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取新建 PCB 默认设计规则配置的名称

## 签名

```typescript
getDefaultRuleConfigurationName(): Promise<string | undefined>;
```

## 返回值

Promise&lt;string \| undefined&gt;

默认设计规则配置的名称，`undefined` 为获取失败
