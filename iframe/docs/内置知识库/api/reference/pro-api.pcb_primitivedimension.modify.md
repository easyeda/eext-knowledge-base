---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveDimension](./pro-api.pcb_primitivedimension.md) &gt; [modify](./pro-api.pcb_primitivedimension.modify.md)

# PCB\_PrimitiveDimension.modify() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

修改尺寸标注

## 签名

```typescript
modify(primitiveId: string | IPCB_PrimitiveDimension, property: {
        dimensionType?: EPCB_PrimitiveDimensionType;
        coordinateSet?: TPCB_PrimitiveDimensionCoordinateSet;
        layer?: TPCB_LayersOfDimension;
        unit?: ESYS_Unit.MILLIMETER | ESYS_Unit.CENTIMETER | ESYS_Unit.INCH | ESYS_Unit.MIL;
        lineWidth?: number;
        precision?: number;
        primitiveLock?: boolean;
    }): Promise<IPCB_PrimitiveDimension | undefined>;
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

primitiveId

</td><td>

string \| [IPCB\_PrimitiveDimension](./pro-api.ipcb_primitivedimension.md)

</td><td>

图元 ID

</td></tr>
<tr><td>

property

</td><td>

{ dimensionType?: [EPCB\_PrimitiveDimensionType](./pro-api.epcb_primitivedimensiontype.md)<!-- -->; coordinateSet?: [TPCB\_PrimitiveDimensionCoordinateSet](./pro-api.tpcb_primitivedimensioncoordinateset.md)<!-- -->; layer?: [TPCB\_LayersOfDimension](./pro-api.tpcb_layersofdimension.md)<!-- -->; unit?: [ESYS\_Unit.MILLIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.CENTIMETER](./pro-api.esys_unit.md) \| [ESYS\_Unit.INCH](./pro-api.esys_unit.md) \| [ESYS\_Unit.MIL](./pro-api.esys_unit.md)<!-- -->; lineWidth?: number; precision?: number; primitiveLock?: boolean; }

</td><td>

修改参数

</td></tr>
</tbody></table>

## 返回值

Promise&lt;[IPCB\_PrimitiveDimension](./pro-api.ipcb_primitivedimension.md) \| undefined&gt;

尺寸标注图元对象
