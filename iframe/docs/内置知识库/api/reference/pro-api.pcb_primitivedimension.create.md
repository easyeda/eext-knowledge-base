---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveDimension](./pro-api.pcb_primitivedimension.md) &gt; [create](./pro-api.pcb_primitivedimension.create.md)

# PCB\_PrimitiveDimension.create() method

创建尺寸标注

## 签名

```typescript
create(dimensionType: EPCB_PrimitiveDimensionType, coordinateSet: TPCB_PrimitiveDimensionCoordinateSet, layer?: TPCB_LayersOfDimension, unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL, lineWidth?: number, precision?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveDimension | undefined>;
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

dimensionType

</td><td>

[EPCB\_PrimitiveDimensionType](./pro-api.epcb_primitivedimensiontype.md)

</td><td>

尺寸标注类型

</td></tr>
<tr><td>

coordinateSet

</td><td>

[TPCB\_PrimitiveDimensionCoordinateSet](./pro-api.tpcb_primitivedimensioncoordinateset.md)

</td><td>

尺寸标注坐标集

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfDimension](./pro-api.tpcb_layersofdimension.md)

</td><td>

_（可选）_ 层

</td></tr>
<tr><td>

unit

</td><td>

[ESYS\_Unit.MILLIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.CENTIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.INCH](./pro-api.esys_unit.md) \| [ESYS\_Unit.MIL](./pro-api.esys_unit.md)

</td><td>

_（可选）_ 单位

</td></tr>
<tr><td>

lineWidth

</td><td>

number

</td><td>

_（可选）_ 线宽

</td></tr>
<tr><td>

precision

</td><td>

number

</td><td>

_（可选）_ 精度，取值范围 `0`<!-- -->-`4`

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

Promise&lt;[IPCB\_PrimitiveDimension](./pro-api.ipcb_primitivedimension.md) \| undefined&gt;

尺寸标注图元对象
