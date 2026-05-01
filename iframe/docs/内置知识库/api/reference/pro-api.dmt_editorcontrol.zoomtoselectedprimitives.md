---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [zoomToSelectedPrimitives](./pro-api.dmt_editorcontrol.zoomtoselectedprimitives.md)

# DMT\_EditorControl.zoomToSelectedPrimitives() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

缩放到已选中图元（适应选中）

## 签名

```typescript
zoomToSelectedPrimitives(tabId?: string): Promise<{
        left: number;
        right: number;
        top: number;
        bottom: number;
    } | false>;
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

Promise&lt;{ left: number; right: number; top: number; bottom: number; } \| false&gt;

缩放到的区域数据，`false` 表示画布不支持该缩放操作或 `tabId` 不存在

## 备注

在返回数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil
