---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_SelectControl](./pro-api.sch_selectcontrol.md) &gt; [doCrossProbeSelect](./pro-api.sch_selectcontrol.docrossprobeselect.md)

# SCH\_SelectControl.doCrossProbeSelect() method

进行交叉选择

## 签名

```typescript
doCrossProbeSelect(components?: Array<string>, pins?: Array<string>, nets?: Array<string>, highlight?: boolean, select?: boolean): boolean;
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

_（可选）_ 是否选中

</td></tr>
</tbody></table>

## 返回值

boolean

操作是否成功
