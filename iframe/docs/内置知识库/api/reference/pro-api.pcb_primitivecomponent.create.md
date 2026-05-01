---
prev: false
next: false
---

[Home](./pro-api.md) &gt; [PCB\_PrimitiveComponent](./pro-api.pcb_primitivecomponent.md) &gt; [create](./pro-api.pcb_primitivecomponent.create.md)

# PCB\_PrimitiveComponent.create() method

> 此 API 当前处于 BETA 预览状态，希望得到开发者的反馈。它的任何功能都可能在接下来的开发进程中被修改，请不要将它用于任何正式环境。

创建器件

## 签名

```typescript
create(component: {
        libraryUuid: string;
        uuid: string;
    } | ILIB_DeviceItem | ILIB_DeviceSearchItem | {
        libraryType: ELIB_LibraryType.FOOTPRINT;
        libraryUuid: string;
        uuid: string;
    } | ILIB_FootprintItem | ILIB_FootprintSearchItem, layer: TPCB_LayersOfComponent, x: number, y: number, rotation?: number, primitiveLock?: boolean): Promise<IPCB_PrimitiveComponent | undefined>;
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

component

</td><td>

{ libraryUuid: string; uuid: string; } \| [ILIB\_DeviceItem](./pro-api.ilib_deviceitem.md) \| [ILIB\_DeviceSearchItem](./pro-api.ilib_devicesearchitem.md) \| { libraryType: [ELIB\_LibraryType.FOOTPRINT](./pro-api.elib_librarytype.md)<!-- -->; libraryUuid: string; uuid: string; } \| [ILIB\_FootprintItem](./pro-api.ilib_footprintitem.md) \| [ILIB\_FootprintSearchItem](./pro-api.ilib_footprintsearchitem.md)

</td><td>

关联库器件

</td></tr>
<tr><td>

layer

</td><td>

[TPCB\_LayersOfComponent](./pro-api.tpcb_layersofcomponent.md)

</td><td>

层

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

rotation

</td><td>

number

</td><td>

_（可选）_ 旋转角度

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

Promise&lt;[IPCB\_PrimitiveComponent](./pro-api.ipcb_primitivecomponent.md) \| undefined&gt;

器件图元对象
