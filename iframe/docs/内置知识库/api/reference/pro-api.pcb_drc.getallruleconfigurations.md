---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [getAllRuleConfigurations](./pro-api.pcb_drc.getallruleconfigurations.md)

# PCB\_Drc.getAllRuleConfigurations() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

获取所有设计规则配置

## 签名

```typescript
getAllRuleConfigurations(includeSystem?: boolean): Promise<Array<{
        [key: string]: any;
    }>>;
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

includeSystem

</td><td>

boolean

</td><td>

_（可选）_ 是否获取系统设计规则配置

</td></tr>
</tbody></table>

## 返回值

Promise&lt;Array&lt;{ \[key: string\]: any; }&gt;&gt;

所有设计规则配置
