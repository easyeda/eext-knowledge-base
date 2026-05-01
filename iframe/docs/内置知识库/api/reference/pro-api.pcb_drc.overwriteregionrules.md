---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Drc](./pro-api.pcb_drc.md) &gt; [overwriteRegionRules](./pro-api.pcb_drc.overwriteregionrules.md)

# PCB\_Drc.overwriteRegionRules() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

覆写区域规则

## 签名

```typescript
overwriteRegionRules(regionRules: Array<{
        [key: string]: any;
    }>): Promise<boolean>;
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

regionRules

</td><td>

Array&lt;{ \[key: string\]: any; }&gt;

</td><td>

区域规则

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

覆写是否成功

## 备注

将会覆写当前 PCB 的所有区域规则，请注意数据丢失风险
