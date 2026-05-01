---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [removeIndicatorMarkers](./pro-api.dmt_editorcontrol.removeindicatormarkers.md)

# DMT\_EditorControl.removeIndicatorMarkers() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

移除指示标记

## 签名

```typescript
removeIndicatorMarkers(tabId?: string): Promise<boolean>;
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

tabId

</td><td>

string

</td><td>

_（可选）_ 标签页 ID，如若未传入，则为最后输入焦点的画布

</td></tr>
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

指示标记移除是否成功，`false` 表示画布不支持该操作或 `tabId` 不存在

## 备注

本接口会移除所有已生成的指示标记
