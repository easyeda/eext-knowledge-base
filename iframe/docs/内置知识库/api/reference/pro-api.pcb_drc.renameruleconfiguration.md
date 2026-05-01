---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [renameRuleConfiguration](./pro-api.pcb_drc.renameruleconfiguration.md)

# PCB\_Drc.renameRuleConfiguration() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

重命名设计规则配置

## 签名

```typescript
renameRuleConfiguration(originalConfigurationName: string, configurationName: string): Promise<boolean>;
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

originalConfigurationName

</td><td>

string

</td><td>

原设计规则配置名称

</td></tr>
<tr><td>

configurationName

</td><td>

string

</td><td>

新设计规则配置名称

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

重命名是否成功

## 备注

只有自定义配置可以重命名，系统配置不允许重命名
