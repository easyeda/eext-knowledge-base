---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveLine](./pro-api.pcb_primitiveline.md) &gt; [create](./pro-api.pcb_primitiveline.create.md)

# PCB\_PrimitiveLine.create() method

创建直线

## 签名

```typescript
create(net: string, layer: TPCB_LayersOfLine, startX: number, startY: number, endX: number, endY: number, lineWidth?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveLine | undefined>;
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

net

</td><td>

string

</td><td>

网络名称

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfLine](./pro-api.tpcb_layersofline.md)

</td><td>

层

</td></tr>
<tr><td>

startX

</td><td>

number

</td><td>

起始位置 X

</td></tr>
<tr><td>

startY

</td><td>

number

</td><td>

起始位置 Y

</td></tr>
<tr><td>

endX

</td><td>

number

</td><td>

终止位置 X

</td></tr>
<tr><td>

endY

</td><td>

number

</td><td>

终止位置 Y

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_（可选）_ 线宽

</td></tr>
<tr><td>

primitiveLock

</td><td>

boolean

</td><td>

_（可选）_ 是否锁定

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveLine](./pro-api.ipcb_primitiveline.md) \| undefined&gt;

直线图元对象
