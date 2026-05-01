---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveArc](./pro-api.sch_primitivearc.md) &gt; [create](./pro-api.sch_primitivearc.create.md)

# SCH\_PrimitiveArc.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建圆弧

## 签名

```typescript
create(startX: number, startY: number, referenceX: number, referenceY: number, endX: number, endY: number, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveArc | undefined>;
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

startX

</td><td>

number

</td><td>

起始点 X

</td></tr>
<tr><td>

startY

</td><td>

number

</td><td>

起始点 Y

</td></tr>
<tr><td>

referenceX

</td><td>

number

</td><td>

参考点 X

</td></tr>
<tr><td>

referenceY

</td><td>

number

</td><td>

参考点 Y

</td></tr>
<tr><td>

endX

</td><td>

number

</td><td>

终止点 X

</td></tr>
<tr><td>

endY

</td><td>

number

</td><td>

终止点 Y

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
</tbody></table>

## 返回值

Promise&lt;[ISCH\_PrimitiveArc](./pro-api.isch_primitivearc.md) \| undefined&gt;

圆弧图元对象
