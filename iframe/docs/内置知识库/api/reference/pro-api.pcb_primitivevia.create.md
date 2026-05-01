---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveVia](./pro-api.pcb_primitivevia.md) &gt; [create](./pro-api.pcb_primitivevia.create.md)

# PCB\_PrimitiveVia.create() method

创建过孔

## 签名

```typescript
create(net: string, x: number, y: number, holeDiameter: number, diameter: number, viaType?: EPCB_PrimitiveViaType, designRuleBlindViaName?: string | null, solderMaskExpansion?: IPCB_PrimitiveSolderMaskAndPasteMaskExpansion | null, primitiveLock?: boolean): Promise<IPCB_PrimitiveVia | undefined>;
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

x

</td><td>

number

</td><td>

坐标 X

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

坐标 Y

</td></tr>
<tr><td>

holeDiameter

</td><td>

number

</td><td>

孔径

</td></tr>
<tr><td>

diameter

</td><td>

number

</td><td>

外径

</td></tr>
<tr><td>

viaType

</td><td>

[EPCB\_PrimitiveViaType](./pro-api.epcb_primitiveviatype.md)

</td><td>

_（可选）_ 过孔类型

</td></tr>
<tr><td>

designRuleBlindViaName

</td><td>

string \| null

</td><td>

_（可选）_ 盲埋孔设计规则项名称，定义过孔的开始层与结束层，`null` 表示非盲埋孔

</td></tr>
<tr><td>

solderMaskExpansion

</td><td>

[IPCB\_PrimitiveSolderMaskAndPasteMaskExpansion](./pro-api.ipcb_primitivesoldermaskandpastemaskexpansion.md) \| null

</td><td>

_（可选）_ 阻焊/助焊扩展，`null` 表示跟随规则

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

Promise&lt;[IPCB\_PrimitiveVia](./pro-api.ipcb_primitivevia.md) \| undefined&gt;

过孔图元对象
