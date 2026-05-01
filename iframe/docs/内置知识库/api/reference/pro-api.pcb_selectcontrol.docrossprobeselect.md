---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_SelectControl](./pro-api.pcb_selectcontrol.md) &gt; [doCrossProbeSelect](./pro-api.pcb_selectcontrol.docrossprobeselect.md)

# PCB\_SelectControl.doCrossProbeSelect() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

进行交叉选择

## 签名

```typescript
doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): Promise<boolean>;
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

components

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 器件位号

</td></tr>
<tr><td>

pins

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 器件位号\_引脚编号，格式为 \['U1\_1', 'U1\_2'\]

</td></tr>
<tr><td>

nets

</td><td>

Array&lt;string&gt;

</td><td>

_（可选）_ 网络名称

</td></tr>
<tr><td>

highlight

</td><td>

boolean

</td><td>

_（可选）_ 是否高亮

</td></tr>
<tr><td>

select

</td><td>

boolean

</td><td>

_（可选）_ 操作是否成功

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;
