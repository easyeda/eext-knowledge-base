---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [DMT\_EditorControl](./pro-api.dmt_editorcontrol.md) &gt; [generateIndicatorMarkers](./pro-api.dmt_editorcontrol.generateindicatormarkers.md)

# DMT\_EditorControl.generateIndicatorMarkers() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

生成指示标记

## 签名

```typescript
generateIndicatorMarkers(markers: Array<IDMT_IndicatorMarkerShape>, color?: {
        r: number;
        g: number;
        b: number;
        alpha: number;
    }, lineWidth?: number, zoom?: boolean, tabId?: string): Promise<boolean>;
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

markers

</td><td>

Array&lt;[IDMT\_IndicatorMarkerShape](./pro-api.idmt_indicatormarkershape.md)<!-- -->&gt;

</td><td>

指示标记外形对象数组

</td></tr>
<tr><td>

color

</td><td>

\{ r: number; g: number; b: number; alpha: number; \}

</td><td>

_（可选）_ 指示标记颜色

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_（可选）_ 线宽

</td></tr>
<tr><td>

zoom

</td><td>

boolean

</td><td>

_（可选）_ 是否定位并缩放

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

指示标记生成是否成功，`false` 表示画布不支持该操作或 `tabId` 不存在

## 备注

指示标记外形数据中，原理图、符号画布坐标单位跨度为 0.01inch，PCB、封装画布坐标单位跨度为 mil
