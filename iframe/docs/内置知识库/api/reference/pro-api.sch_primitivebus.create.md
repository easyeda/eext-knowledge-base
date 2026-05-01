---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveBus](./pro-api.sch_primitivebus.md) &gt; [create](./pro-api.sch_primitivebus.create.md)

# SCH\_PrimitiveBus.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建总线

## 签名

```typescript
create(busName: string, line: Array<number> | Array<Array<number>>, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveBus | undefined>;
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

busName

</td><td>

string

</td><td>

总线名称

</td></tr>
<tr><td>

line

</td><td>

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;

</td><td>

多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线，如若多段线彼此无任何连接则创建将会失败

</td></tr>
<tr><td>

color

</td><td>

string \| null

</td><td>

_（可选）_ 总线颜色，`null` 表示默认

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

Promise&lt;[ISCH\_PrimitiveBus](./pro-api.isch_primitivebus.md) \| undefined&gt;

总线图元对象
