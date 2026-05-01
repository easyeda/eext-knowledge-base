---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveRectangle](./pro-api.sch_primitiverectangle.md) &gt; [create](./pro-api.sch_primitiverectangle.create.md)

# SCH\_PrimitiveRectangle.create() method

创建矩形

## 签名

```typescript
create(topLeftX: number, topLeftY: number, width: number, height: number, cornerRadius?: number, rotation?: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null, fillStyle?: ESCH_PrimitiveFillStyle | null): Promise<ISCH_PrimitiveRectangle | undefined>;
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

topLeftX

</td><td>

number

</td><td>

左上点 X

</td></tr>
<tr><td>

topLeftY

</td><td>

number

</td><td>

左上点 Y

</td></tr>
<tr><td>

width

</td><td>

number

</td><td>

宽

</td></tr>
<tr><td>

height

</td><td>

number

</td><td>

高

</td></tr>
<tr><td>

cornerRadius

</td><td>

number

</td><td>

_（可选）_ 圆角半径

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_（可选）_ 旋转角度，绕左上点旋转，可选 `0` `90` `180` `270`

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

Promise&lt;[ISCH\_PrimitiveRectangle](./pro-api.isch_primitiverectangle.md) \| undefined&gt;

矩形图元对象
