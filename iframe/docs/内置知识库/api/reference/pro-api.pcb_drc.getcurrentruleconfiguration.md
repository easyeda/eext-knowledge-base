---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getCurrentRuleConfiguration](./pro-api.pcb_drc.getcurrentruleconfiguration.md)

# PCB\_Drc.getCurrentRuleConfiguration() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取当前设计规则配置

## 签名

```typescript
getCurrentRuleConfiguration(): Promise<{
        [key: string]: any;
    } | undefined>;
```

## 返回值

Promise&lt;{ \[key: string\]: any; } \| undefined&gt;

当前设计规则配置，`undefined` 为获取失败
