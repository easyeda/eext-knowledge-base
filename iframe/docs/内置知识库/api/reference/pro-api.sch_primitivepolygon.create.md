---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitivePolygon](./pro-api.sch_primitivepolygon.md) &gt; [create](./pro-api.sch_primitivepolygon.create.md)

# SCH\_PrimitivePolygon.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建多边形

## 签名

```typescript
create(line: Array<number>, color?: string | null, fillColor?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitivePolygon | undefined>;
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

line

</td><td>

Array&lt;number&gt;

</td><td>

坐标组，连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线

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

Promise&lt;[ISCH\_PrimitivePolygon](./pro-api.isch_primitivepolygon.md) \| undefined&gt;

多边形图元对象
