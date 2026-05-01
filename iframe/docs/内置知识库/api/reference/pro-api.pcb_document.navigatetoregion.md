---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_Document](./pro-api.pcb_document.md) &gt; [navigateToRegion](./pro-api.pcb_document.navigatetoregion.md)

# PCB\_Document.navigateToRegion() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

定位到画布区域

## 签名

```typescript
navigateToRegion(left: number, right: number, top: number, bottom: number): Promise<boolean>;
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
</tbody></table>

## 返回值

Promise&lt;boolean&gt;

操作是否成功

## 备注

本接口在前端画布上定位到指定的区域，区域数据为相对于数据原点的偏移；

例如：传入数据为 `{left: 0, right: 60, top: 100, bottom: -20}` =<!-- -->&gt; `navigateToRegion(0, 60, 100, -20)`<!-- -->， 则画布将会定位到以 `[30, 40]` 为中心的，`x` 轴方向长度为 `60`<!-- -->，`y` 轴方向长度为 `120` 的矩形范围；

本接口不进行缩放操作，但会生成指示定位中心及表示区域范围的矩形框；

此处的单位为数据层面单位，在跨度上等同于画布层面的 mil
