---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getCurrentRuleConfigurationName](./pro-api.pcb_drc.getcurrentruleconfigurationname.md)

# PCB\_Drc.getCurrentRuleConfigurationName() method

获取当前设计规则配置名称

## 签名

```typescript
getCurrentRuleConfigurationName(): Promise<string | undefined>;
```

## 返回值

Promise&lt;string \| undefined&gt;

当前设计规则配置名称，`undefined` 为获取失败
