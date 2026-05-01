---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveImage](./pro-api.pcb_primitiveimage.md) &gt; [create](./pro-api.pcb_primitiveimage.create.md)

# PCB\_PrimitiveImage.create() method

创建图像

## 签名

```typescript
create(x: number, y: number, complexPolygon: TPCB_PolygonSourceArray | Array<TPCB_PolygonSourceArray> | IPCB_Polygon | IPCB_ComplexPolygon, layer: TPCB_LayersOfImage, width?: number, height?: number, rotation?: number, horizonMirror?: boolean, primitiveLock?: boolean): Promise<IPCB_PrimitiveImage | undefined>;
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

x

</td><td>

number

</td><td>

BBox 左上点坐标 X

</td></tr>
<tr><td>

y

</td><td>

number

</td><td>

BBox 左上点坐标 Y

</td></tr>
<tr><td>

complexPolygon

</td><td>

[TPCB\_PolygonSourceArray](./pro-api.tpcb_polygonsourcearray.md) \| Array&lt;[TPCB\_PolygonSourceArray](./pro-api.tpcb_polygonsourcearray.md)<!-- -->&gt; \| [IPCB\_Polygon](./pro-api.ipcb_polygon.md) \| [IPCB\_ComplexPolygon](./pro-api.ipcb_complexpolygon.md)

</td><td>

图像源数据（复杂多边形），可以使用 [PCB\_MathPolygon.convertImageToComplexPolygon()](./pro-api.pcb_mathpolygon.convertimagetocomplexpolygon.md) 方法将图像文件转换为复杂多边形数据

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfImage](./pro-api.tpcb_layersofimage.md)

</td><td>

层

</td></tr>
<tr><td>

width

</td><td>

number

</td><td>

_（可选）_ 宽

</td></tr>
<tr><td>

height

</td><td>

number

</td><td>

_（可选）_ 高

</td></tr>
<tr><td>

rotation

</td><td>

number

</td><td>

_（可选）_ 旋转角度

</td></tr>
<tr><td>

horizonMirror

</td><td>

boolean

</td><td>

_（可选）_ 是否水平镜像

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

Promise&lt;[IPCB\_PrimitiveImage](./pro-api.ipcb_primitiveimage.md) \| undefined&gt;

图像图元对象

## 备注

如需创建彩色丝印图像，请使用 [二进制内嵌对象图元类](./pro-api.pcb_primitiveobject.md)
