---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [zoomToRegion](./pro-api.dmt_editorcontrol.zoomtoregion.md)

# DMT\_EditorControl.zoomToRegion() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

缩放到区域

## 签名

```typescript
zoomToRegion(left: number, right: number, top: number, bottom: number, tabId?: string): Promise<boolean>;
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

left

</td><td>

number

</td><td>

矩形框第一 X 坐标

</td></tr>
<tr><td>

right

</td><td>

number

</td><td>

矩形框第二 X 坐标

</td></tr>
<tr><td>

top

</td><td>

number

</td><td>

矩形框第一 Y 坐标

</td></tr>
<tr><td>

bottom

</td><td>

number

</td><td>

矩形框第二 Y 坐标

</td></tr>
<tr><td>

tabId

</td><td>

string

</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

在原理图、符号画布坐标单位跨度为 0.01inch，在 PCB、封装画布坐标单位跨度为 mil
