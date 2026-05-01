---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveCircle](./pro-api.sch_primitivecircle.md) &gt; [create](./pro-api.sch_primitivecircle.create.md)

# SCH\_PrimitiveCircle.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建圆

## 签名

```typescript
create(centerX: number, centerY: number, radius: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveCircle>;
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

centerX

</td><td>

number

</td><td>

圆心 X

</td></tr>
<tr><td>

centerY

</td><td>

number

</td><td>

圆心 Y

</td></tr>
<tr><td>

radius

</td><td>

number

</td><td>

半径

</td></tr>
<tr><td>

color

</td><td>

string \| null

</td><td>

_（可选）_ 颜色，`null` 表示默认

</td></tr>
<tr><td>

fillColor

</td><td>

string \| null

</td><td>

_（可选）_ 填充颜色，`none` 表示无填充，`null` 表示默认

</td></tr>
<tr><td>

lineWidth

</td><td>

number \| null

</td><td>

_（可选）_ 线宽，范围 `1-10`<!-- -->，`null` 表示默认

</td></tr>
<tr><td>

lineType

</td><td>

[ESCH\_PrimitiveLineType](./pro-api.esch_primitivelinetype.md) \| null

</td><td>

_（可选）_ 线型，`null` 表示默认

</td></tr>
<tr><td>

fillStyle

</td><td>

[ESCH\_PrimitiveFillStyle](./pro-api.esch_primitivefillstyle.md) \| null

</td><td>

_（可选）_ 填充样式，`null` 表示默认

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveCircle](./pro-api.isch_primitivecircle.md)<!-- -->&gt;

圆图元对象
