---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [SCH\_PrimitiveWire](./pro-api.sch_primitivewire.md) &gt; [create](./pro-api.sch_primitivewire.create.md)

# SCH\_PrimitiveWire.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建导线

## 签名

```typescript
create(line: Array<number> | Array<Array<number>>, net?: string, color?: string | null, lineWidth?: number | null, lineType?: ESCH_PrimitiveLineType | null): Promise<ISCH_PrimitiveWire | undefined>;
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

Array&lt;number&gt; \| Array&lt;Array&lt;number&gt;&gt;

</td><td>

多段线坐标组，每段都是连续的一组 `[x1, y1, x2, y2, x3, y3]` 所描述的线，如若多段线彼此无任何连接则创建将会失败

</td></tr>
<tr><td>

net

</td><td>

string

</td><td>

_（可选）_ 网络名称，如若未指定，则遵循： 1. 没有坐标落在任何图元上，则默认为空网络； 2. 有一个坐标点在某个网络的图元上，则跟随该图元的网络； 3. 有多个坐标点在多个不同网络的图元上，则创建失败

如若已指定，则遵循： 1. 有一个或多个坐标点在其他网络的图元上，且其他图元并未显式（通常指的是包含网络标签或网络端口）指定网络，则其他图元跟随指定的网络； 2. 如若其他图元指定了网络，则创建失败

</td></tr>
<tr><td>

color

</td><td>

string \| null

</td><td>

_（可选）_ 导线颜色，`null` 表示默认

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

Promise&lt;[ISCH\_PrimitiveWire](./pro-api.isch_primitivewire.md) \| undefined&gt;

导线图元对象
