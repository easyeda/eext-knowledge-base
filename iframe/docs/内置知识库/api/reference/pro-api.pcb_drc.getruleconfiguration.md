---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getRuleConfiguration](./pro-api.pcb_drc.getruleconfiguration.md)

# PCB\_Drc.getRuleConfiguration() method

获取指定设计规则配置

## 签名

```typescript
getRuleConfiguration(configurationName: string): Promise<{
        [key: string]: any;
    } | undefined>;
```

## 参数名

<table><thead><tr><th>

参数

</th><th>

类型

</th><th>

描述

</th></tr></thead>
<tbody><tr><td>

configurationName

</td><td>

string

</td><td>

配置名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;{ \[key: string\]: any; } \| undefined&gt;

设计规则配置，`undefined` 为不存在该设计规则
