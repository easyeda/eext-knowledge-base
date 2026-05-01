---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [saveRuleConfiguration](./pro-api.pcb_drc.saveruleconfiguration.md)

# PCB\_Drc.saveRuleConfiguration() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

保存设计规则配置

## 签名

```typescript
saveRuleConfiguration(ruleConfiguration: {
        [key: string]: any;
    }, configurationName: string, allowOverwrite?: boolean): Promise<boolean>;
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

ruleConfiguration

</td><td>

\{ \[key: string\]: any; \}

</td><td>

设计规则配置

</td></tr>
<tr><td>

configurationName

</td><td>

string

</td><td>

配置名称

</td></tr>
<tr><td>

allowOverwrite

</td><td>

boolean

</td><td>

_（可选）_ 是否允许覆写同名设计规则配置，`false` 则将在遇到同名设计规则配置时返回 `false`<!-- -->，请注意可能的数据丢失风险

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

保存是否成功

## 备注

只有自定义配置可以覆盖保存，系统配置不允许修改和覆盖
