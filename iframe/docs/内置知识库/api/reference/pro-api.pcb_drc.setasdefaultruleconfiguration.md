---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [setAsDefaultRuleConfiguration](./pro-api.pcb_drc.setasdefaultruleconfiguration.md)

# PCB\_Drc.setAsDefaultRuleConfiguration() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

设置为新建 PCB 默认设计规则配置

## 签名

```typescript
setAsDefaultRuleConfiguration(configurationName: string): Promise<boolean>;
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

Promise&lt;boolean&gt;

设置是否成功

## 备注

返回值为结果导向，重复设置相同的设计规则为默认设计规则也将返回 `true`
